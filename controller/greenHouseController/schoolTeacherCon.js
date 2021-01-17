const schoolTeacherSchema = require("../../model/greenhouseModel/schoolTeacher");
const checkField = require("../../FieldValidation/checkField");

schoolTeacherAdd = async (req, res) => {
    const { name, image, desig } = req.body;

    if (!name) {
        return res.status(400).json(checkField("School Teacher name"));
    } else if (!image) {
        return res.status(400).json(checkField("School Teacher  image"));
    }
    else if (!desig) {
        return res.status(400).json(checkField("School Teacher Designation"));
    } else {
        try {
            const result = new schoolTeacherSchema({
                name, image, desig
            });
            await result.save();
            res.send({ message: "School Campus Added" });
        } catch (err) {
            return res.status(422).send(err + "err");
        }
    }
};

schoolTeacherGet = async (req, res) => {
    const result = await schoolTeacherSchema.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};


module.exports = {
    schoolTeacherAdd,
    schoolTeacherGet,

};
