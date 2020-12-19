const incubationMentorModel = require("../../model/incubationCenterModel/incubationMentorModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

incubationMentorAdd = async (req, res) => {
  const { menName, menDesig, menImgUrl } = req.body;
  // console.log(data, "imgurl");
  if (!menName) {
    return res.status(400).json(checkField("Mentor Name"));
  } else if (!menDesig) {
    return res.status(400).json(checkField("Mentor Designation"));
  } else if (!menImgUrl) {
    return res.status(400).json(checkField("Mentor Image"));
  } else {
    try {
      const fileStr = menImgUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new incubationMentorModel({
          menImgUrl: uploadResponse.url,
          menName,
          menDesig,
        });
        await result.save();
        return res.status(200).json({ message: "Incubation Mentor Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

incubationMentorGet = async (req, res) => {
  // checkField;
  const result = await incubationMentorModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

incubationMentorDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Incubation Mentor ID"));
  } else {
    let resu = await incubationMentorModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Incubation Mentor Not Found",
        });
      } else {
        await incubationMentorModel.findByIdAndDelete(id, function (
          err,
          result
        ) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: result,
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
  incubationMentorAdd,
  incubationMentorGet,
  incubationMentorDel,
};
