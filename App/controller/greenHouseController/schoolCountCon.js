const schoolCountSchema = require("../../model/greenhouseModel/schoolCount");
const checkField = require("../../FieldValidation/checkField");

schoolCountAdd = async (req, res) => {
    const { typeName, typeNumber } = req.body;

    if (!typeName) {
        return res.status(400).json(checkField("Type Name"));
    } else if (!typeNumber) {
        return res.status(400).json(checkField("Type Number"));
    } else {
        try {
            const result = new schoolCountSchema({
                typeName,
                typeNumber,
            });
            await result.save();
            res.send({ message: "School Count Added" });
        } catch (err) {
            return res.status(422).send(err + "err");
        }
    }
};

schoolCountGet = async (req, res) => {
    const result = await schoolCountSchema.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    schoolCountAdd,
    schoolCountGet,

};
