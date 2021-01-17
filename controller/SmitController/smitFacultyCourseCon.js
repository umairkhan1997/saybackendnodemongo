const SmitFacultyCourseModel = require("../../model/SmitModel/smitFacultyCourse");
const checkField = require("../../FieldValidation/checkField");

smitFacultyCourseAdd = async (req, res) => {
    const { courName, courVal } = req.body;
    // console.log(data, "imgurl");
    if (!courName) {
        return res.status(400).json(checkField("Course Name"));
    }
    else if (!courVal) {
        return res.status(400).json(checkField("Course Value"));
    } else {

        try {
            const result = new SmitFacultyCourseModel({
                courName, courVal

            })
            await result.save();
            return res.status(200).json({ message: "Course Added" });

        }
        catch (err) {
            return res.status(422).send({ message: err.message });

        }
    }

};

smitFacultyCourseGet = async (req, res) => {
    const result = await SmitFacultyCourseModel.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    smitFacultyCourseAdd,
    smitFacultyCourseGet
};
