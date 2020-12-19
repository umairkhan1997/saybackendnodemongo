const SmitTeacherModel = require("../../model/SmitModel/SmitTeacherModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

SmitTeacheradd = async (req, res) => {
  const { tName, tCourName, tImgURL } = req.body;
  // console.log(data, "imgurl");
  if (!tName) {
    return res.status(400).json(checkField("Teacher Name"));
  } else if (!tCourName) {
    return res.status(400).json(checkField("Teacher Course Name"));
  } else if (!tImgURL) {
    return res.status(400).json(checkField("Teacher Image"));
  } else {
    try {
      const fileStr = tImgURL;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new SmitTeacherModel({
          tName,
          tCourName,
          tImgURL: uploadResponse.url,
        });
        await result.save();
        return res.status(200).json({ message: "Faculty Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

SmitTeacherGet = async (req, res) => {
  // checkField;
  const result = await SmitTeacherModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

SmitTeacherDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("faculty ID"));
  } else {
    let imgUrl = await SmitTeacherModel.findById(id);
    try {
      if (!imgUrl) {
        return res.status(404).json({
          success: false,
          message: "Faculty Not Found",
        });
      } else {
        await SmitTeacherModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Faculty Deleted",
            });
          }
        });
      }
    } catch (err) {
      return res.status(422).json({ success: false, message: err.message });
    }
  }
};

module.exports = {
  SmitTeacheradd,
  SmitTeacherGet,
  SmitTeacherDel,
};
