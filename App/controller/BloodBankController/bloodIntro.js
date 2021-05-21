const bloodIntroSchema = require("../../model/bloodModel/bloodIntro");
const checkField = require("../../FieldValidation/checkField");

bloodIntroAdd = async (req, res) => {
    const { bloodHead, bloodVideoUrl } = req.body;
    // console.log(data, "imgurl");
    if (!bloodHead) {
        return res.status(400).json(checkField("Blood Heading"));
    } else if (!bloodVideoUrl) {
        return res.status(400).json(checkField("Blood VideoUrl"));
    } else {

        try {
            const result = new bloodIntroSchema({
                bloodHead, bloodVideoUrl
            });
            await result.save();
            return res.status(200).json({ message: "Blood Intro Added" });
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

    }
};

bloodIntroGet = async (req, res) => {
    // checkField;
    const result = await bloodIntroSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    bloodIntroAdd,
    bloodIntroGet
};
