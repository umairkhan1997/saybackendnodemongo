const DastarIntroModel = require("../../model/Dastarkhwan/DastarIntro");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

DastarIntroAdd = async (req, res) => {
  const { imgDas, mainHead, headDetail } = req.body;
  // console.log(data, "imgurl");
  if (!imgDas) {
    return res.status(400).json(checkField("Image"));
  } else if (!mainHead) {
    return res.status(400).json(checkField("Main Heading"));
  } else if (!headDetail) {
    return res.status(400).json(checkField("Heading Detail"));
  } else {
    try {
      const fileStr = imgDas;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "successfully image add");
      try {
        const result = new DastarIntroModel({
          imgDas: uploadResponse.url,
          mainHead,
          headDetail,
        });
        await result.save();
        return res.status(200).json({ message: "Dastarkhwan Intro Added" });
        // console.log("Faculty Added");
      } catch (err) {
        return res.status(422).send({ message: err.message });
        // console.log(err, "err");
      }
    } catch (err) {
      // console.error(err, "err");
      return res.status(500).json({ message: err.message });
      // console.log(err, "err 500");
    }
  }
};

DastarIntroGet = async (req, res) => {
  // checkField;
  const result = await DastarIntroModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

DastarIntroDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Dastarkhwan Intro ID"));
  } else {
    let resu = await DastarIntroModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Dastarkhwan Intro Not Found",
        });
      } else {
        await DastarIntroModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Dastarkhwan Intro Deleted",
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
  DastarIntroAdd,
  DastarIntroGet,
  DastarIntroDel,
};
