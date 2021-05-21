const opdDataSchema = require("../../model/MedicalModel/opdDataModel");
const checkField = require("../../FieldValidation/checkField");

opdListAdd = async (req, res) => {
    const { opdName, desig, name, day, time } = req.body;
    // console.log(data, "imgurl");
    if (!opdName) {
        return res.status(400).json(checkField("OPD LSIT Name"));
    } else if (!desig) {
        return res.status(400).json(checkField("Doctor Designation"));
    }
    else if (!name) {
        return res.status(400).json(checkField("Doctor Name"));
    }
    else if (!day) {
        return res.status(400).json(checkField("Doctor Day"));
    }
    else if (!time) {
        return res.status(400).json(checkField("Doctor Time"));
    } else {
        try {
            const result = new opdDataSchema({
                opdName, desig, name, day, time
            });
            await result.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "OPD LSIT Added", data: saved });
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

opdListGet = async (req, res) => {
    // checkField;
    const result = await opdDataSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    opdListAdd,
    opdListGet
};

