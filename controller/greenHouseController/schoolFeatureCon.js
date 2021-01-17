const schoolFeatureSchema = require("../../model/greenhouseModel/schoolFeature");
const checkField = require("../../FieldValidation/checkField");

schoolFeatureAdd = async (req, res) => {
    const { qty, heading, subHead } = req.body;

    if (!qty) {
        return res.status(400).json(checkField("School qty"));
    } else if (!heading) {
        return res.status(400).json(checkField("School Heading"));
    }
    else if (!subHead) {
        return res.status(400).json(checkField("School subHead"));
    } else {
        try {
            const result = new schoolFeatureSchema({
                qty, heading, subHead
            });
            await result.save();
            res.send({ message: "School Campus Added" });
        } catch (err) {
            return res.status(422).send(err + "err");
        }
    }
};

schoolFeatureGet = async (req, res) => {
    const result = await schoolFeatureSchema.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    schoolFeatureAdd,
    schoolFeatureGet,

};
