const bloodAimSchema = require("../../model/bloodModel/bloodAim");
const checkField = require("../../FieldValidation/checkField");

bloodAimAdd = async (req, res) => {
    const { bloodAim } = req.body;
    // console.log(data, "imgurl");
    if (!bloodAim) {
        return res.status(400).json(checkField("Blood Aim"));
    } else {

        try {
            const result = new bloodAimSchema({
                bloodAim
            });
            await result.save();
            return res.status(200).json({ message: "Blood Aim Added" });
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

    }
};

bloodAimGet = async (req, res) => {
    // checkField;
    const result = await bloodAimSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    bloodAimAdd,
    bloodAimGet
};
