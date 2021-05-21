const bloodBankDataSchema = require("../../model/bloodModel/bloodBankData");
const checkField = require("../../FieldValidation/checkField");

bloodBankDataAdd = async (req, res) => {
    const { headOne, headOnedetail, headTwo, headDate, headCount } = req.body;
    // console.log(data, "imgurl");
    if (!headOne) {
        return res.status(400).json(checkField("Blood Heading"));
    } else if (!headOnedetail) {
        return res.status(400).json(checkField("Blood detail"));
    }
    else if (!headTwo) {
        return res.status(400).json(checkField("Blood Second Heading"));
    }
    else if (!headDate) {
        return res.status(400).json(checkField("Blood Second Heading Date"));
    }
    else if (!headCount) {
        return res.status(400).json(checkField("Blood Second Heading Count"));
    } else {
        try {
            const result = new bloodBankDataSchema({
                headOne, headOnedetail, headTwo, headDate, headCount
            });
            await result.save();
            return res.status(200).json({ message: "Blood Data Added" });
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }

    }
};

bloodBankDataGet = async (req, res) => {
    // checkField;
    const result = await bloodBankDataSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    bloodBankDataAdd,
    bloodBankDataGet
};
