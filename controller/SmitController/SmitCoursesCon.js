const SmitCoursesScheme = require("../../model/SmitModel/SmitCoursesModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

smitCoursesAdd = async (req, res) => {
  const { courName, courTopic, courDuration, courImgUrl } = req.body;

  if (!courName) {
    return res.status(400).json(checkField("Course Name"));
  } else if (!courTopic) {
    return res.status(400).json(checkField("Course Topic"));
  } else if (!courDuration) {
    return res.status(400).json(checkField("Course Duration"));
  } else if (!courImgUrl) {
    return res.status(400).json(checkField("Course Img"));
  } else {
    try {
      const fileStr = req.body.courImgUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new SmitCoursesScheme({
          courName,
          courTopic,
          courDuration,
          courImgUrl: uploadResponse.url,
        });
        await result.save();
        res.status(200).json({ success: true, message: "New Course added" });
      } catch (err) {
        res.status(422).send({ success: false, message: err.message });
      }
    } catch (err) {
      // console.error(err, "err");
      return res.status(500).json({ message: err.message });
    }
  }
};

smitCoursesGet = async (req, res) => {
  const allCour = await SmitCoursesScheme.find();
  res.status(200).json({ success: true, data: allCour });
};

smitCoursesUpdate = async (req, res) => {
  let courId = await SmitCoursesScheme.findById(req.body.id);
  if (!courId) {
    res.status(404).json({ success: false, message: "Course ID is incorrect" });
  } else {
    courId = await SmitCoursesScheme.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res
      .status(200)
      .json({ success: true, message: "Courses Updated", data: courId });
  }
};

smitCoursesDelete = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json(checkField("Course ID"));
  } else {
    try {
      let courId = await SmitCoursesScheme.findById(id);
      if (!courId) {
        return res
          .status(400)
          .json({ success: false, message: "Course ID is incorrect" });
      } else {
        courId = await SmitCoursesScheme.findByIdAndDelete(id, function (
          err,
          result
        ) {
          if (err) {
            return res
              .status(422)
              .json({ success: false, message: err.message });
          } else {
            return res
              .status(200)
              .json({ success: true, message: "Courses Deleted" });
          }
        });
      }
    } catch (err) {
      res.status(422).json({ success: false, message: err.message });
    }
  }
};

module.exports = {
  smitCoursesAdd,
  smitCoursesGet,
  smitCoursesUpdate,
  smitCoursesDelete,
};
