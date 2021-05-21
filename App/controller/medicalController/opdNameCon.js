const opdNamesSchema = require("../../model/MedicalModel/opdNamesModel");
const checkField = require("../../FieldValidation/checkField");

opdNameAdd = async (req, res) => {
    const { opdName } = req.body;
    // console.log(data, "imgurl");
    if (!opdName) {
        return res.status(400).json(checkField("OPD Name"));
    } else {
        try {
            const result = new opdNamesSchema({
                opdName
            });
            await result.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "OPD Name Added", data: saved });
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

opdNameGet = async (req, res) => {
    // checkField;
    const result = await opdNamesSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    opdNameAdd,
    opdNameGet
};

