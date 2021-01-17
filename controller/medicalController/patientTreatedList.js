const patientTreatedSchema = require("../../model/MedicalModel/patientTreatedModel");
const checkField = require("../../FieldValidation/checkField");

patientTreatedAdd = async (req, res) => {
    const { head, detail } = req.body;
    // console.log(data, "imgurl");
    if (!head) {
        return res.status(400).json(checkField("Patient Treated Name"));
    } else if (!detail) {
        return res.status(400).json(checkField("Patient Treated detail"));
    } else {
        try {
            const result = new patientTreatedSchema({
                head, detail
            });
            await result.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "patient Treated Added", data: saved });
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

patientTreatedGet = async (req, res) => {
    // checkField;
    const result = await patientTreatedSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    patientTreatedAdd,
    patientTreatedGet
};

