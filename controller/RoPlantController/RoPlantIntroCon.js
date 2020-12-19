const RoPlantIntroModel = require("../../model/RoPlant/RoPlantIntroModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

RoPlantIntroAdd = async (req, res) => {
  const { imgRoPlant, mainHead, headDetail } = req.body;
  // console.log(data, "imgurl");
  if (!imgRoPlant) {
    return res.status(400).json(checkField("Image"));
  } else if (!mainHead) {
    return res.status(400).json(checkField("Main Heading"));
  } else if (!headDetail) {
    return res.status(400).json(checkField("Heading Detail"));
  } else {
    try {
      const fileStr = imgRoPlant;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "successfully image add");
      try {
        const result = new RoPlantIntroModel({
          imgRoPlant: uploadResponse.url,
          mainHead,
          headDetail,
        });
        await result.save();
        return res.status(200).json({ message: "RoPlant Intro Added" });
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

RoPlantIntroGet = async (req, res) => {
  // checkField;
  const result = await RoPlantIntroModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

RoPlantIntroDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("RoPlant Intro ID"));
  } else {
    let resu = await RoPlantIntroModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "RoPlant Intro Not Found",
        });
      } else {
        await RoPlantIntroModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "RoPlant Intro Deleted",
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
  RoPlantIntroAdd,
  RoPlantIntroGet,
  RoPlantIntroDel,
};
