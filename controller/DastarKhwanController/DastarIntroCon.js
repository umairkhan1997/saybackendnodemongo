const DastarIntroModel = require("../../model/Dastarkhwan/DastarIntro");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

DastarIntroAdd = async (req, res) => {
  const { videoLink, mainHead, headDetail, count } = req.body;
  // console.log(data, "imgurl");
  if (!videoLink) {
    return res.status(400).json(checkField("video Link"));
  } else if (!mainHead) {
    return res.status(400).json(checkField("Main Heading"));
  } else if (!headDetail) {
    return res.status(400).json(checkField("Heading Detail"));
  }
  else if (!count) {
    return res.status(400).json(checkField("Count"));
  } else {

    // console.log(uploadResponse, "successfully image add");
    try {
      const result = new DastarIntroModel({
        videoLink,
        mainHead,
        headDetail,
        count
      });
      await result.save();
      return res.status(200).json({ message: "Dastarkhwan Intro Added" });
      // console.log("Faculty Added");
    } catch (err) {
      return res.status(422).send({ message: err.message });
      // console.log(err, "err");
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
