const incubationIntroModel = require("../../model/incubationCenterModel/incubationIntroModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

incubationIntroAdd = async (req, res) => {
  const { incHead, incTxt, incTxt2, incImgUrl } = req.body;
  // console.log(data, "imgurl");
  if (!incHead) {
    return res.status(400).json(checkField("Incubation Heading"));
  } else if (!incTxt) {
    return res.status(400).json(checkField("Incubation Txt"));
  } else if (!incTxt2) {
    return res.status(400).json(checkField("Incubation Txt Two"));
  } else if (!incImgUrl) {
    return res.status(400).json(checkField("Incubation Image"));
  } else {
    try {
      const fileStr = incImgUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new incubationIntroModel({
          incHead,
          incTxt,
          incImgUrl: uploadResponse.url,
          incTxt2,
        });
        await result.save();
        return res.status(200).json({ message: "Incubation Intro Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

incubationIntroGet = async (req, res) => {
  // checkField;
  const result = await incubationIntroModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

incubationIntroDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Incubation ID"));
  } else {
    let resu = await incubationIntroModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Incubation Not Found",
        });
      } else {
        await incubationIntroModel.findByIdAndDelete(id, function (
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
  incubationIntroAdd,
  incubationIntroGet,
  incubationIntroDel,
};
