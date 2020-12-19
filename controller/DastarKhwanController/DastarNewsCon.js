const DastarNewsModel = require("../../model/Dastarkhwan/DastarNewsModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

DastarNewsAdd = async (req, res) => {
  const { newsHead, newsTxt, newsImgUrl } = req.body;
  // console.log(data, "imgurl");
  if (!newsImgUrl) {
    return res.status(400).json(checkField("News Image"));
  } else if (!newsHead) {
    return res.status(400).json(checkField("News  Heading"));
  } else if (!newsTxt) {
    return res.status(400).json(checkField("News Heading Detail"));
  } else {
    try {
      const fileStr = newsImgUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "successfully image add");
      try {
        const result = new DastarNewsModel({
          newsImgUrl: uploadResponse.url,
          newsHead,
          newsTxt,
        });
        await result.save();
        return res.status(200).json({ message: "Dastarkhwan News Added" });
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

DastarNewsGet = async (req, res) => {
  // checkField;
  const result = await DastarNewsModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

DastarNewsDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Dastarkhwan News ID"));
  } else {
    let resu = await DastarNewsModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Dastarkhwan News Not Found",
        });
      } else {
        await DastarNewsModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Dastarkhwan News Deleted",
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
  DastarNewsAdd,
  DastarNewsGet,
  DastarNewsDel,
};
