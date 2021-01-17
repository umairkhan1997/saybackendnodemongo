const benificiariesCountSchema = require("../../model/MedicalModel/benificiariesCountModel");
const checkField = require("../../FieldValidation/checkField");

benificiariesCountAdd = async (req, res) => {
    const { head, count } = req.body;
    // console.log(data, "imgurl");
    if (!head) {
        return res.status(400).json(checkField("Benificiaries Name"));
    } else if (!count) {
        return res.status(400).json(checkField("Benificiaries Count"));
    } else {
        try {
            const result = new benificiariesCountSchema({
                head, count
            });
            await result.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "benificiaries Count Added", data: saved });
                }).catch(error => {
                    return res
                        .status(422)
                        .json({ success: false, message: error.message });
                })
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

    }
};

benificiariesCountGet = async (req, res) => {
    // checkField;
    const result = await benificiariesCountSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    benificiariesCountAdd,
    benificiariesCountGet
};

