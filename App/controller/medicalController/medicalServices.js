const medicalServiceSchema = require("../../model/MedicalModel/medicalServiceModel");
const checkField = require("../../FieldValidation/checkField");

medicalServiceAdd = async (req, res) => {
    const { head, icon } = req.body;
    // console.log(data, "imgurl");
    if (!head) {
        return res.status(400).json(checkField("Medical Service head"));
    } else if (!icon) {
        return res.status(400).json(checkField("Medical Service icon"));
    } else {
        try {
            const result = new medicalServiceSchema({
                head, icon
            });
            await result.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "Medical Service Added", data: saved });
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

medicalServiceGet = async (req, res) => {
    // checkField;
    const result = await medicalServiceSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    medicalServiceAdd,
    medicalServiceGet
};

