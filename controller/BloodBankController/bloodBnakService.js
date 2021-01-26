const bloodServiceSchema = require("../../model/bloodModel/bloodService");
const checkField = require("../../FieldValidation/checkField");

bloodServiceAdd = async (req, res) => {
    const { service } = req.body;
    // console.log(data, "imgurl");
    if (!service) {
        return res.status(400).json(checkField("Blood Sevice"));
    } else {

        try {
            const result = new bloodServiceSchema({
                service
            });
            await result.save();
            return res.status(200).json({ message: "Blood Sevice Added" });
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

    }
};

bloodServiceGet = async (req, res) => {
    // checkField;
    const result = await bloodServiceSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    bloodServiceAdd,
    bloodServiceGet
};
