const QuranAppModel = require("../../model/QuranAppTaf/QuranAppSchema");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

QuranAppAndroidAdd = async (req, res) => {
  const { logo, appName, publisher, curVer, compDate, status } = req.body;
  // console.log(data, "imgurl");
  if (!logo) {
    return res.status(400).json(checkField("App logo"));
  } else if (!appName) {
    return res.status(400).json(checkField("App Name"));
  } else if (!publisher) {
    return res.status(400).json(checkField("App Publisher"));
  } else if (!curVer) {
    return res.status(400).json(checkField("App Current Version"));
  } else if (!compDate) {
    return res.status(400).json(checkField("App Completed Date"));
  } else if (!status) {
    return res.status(400).json(checkField("App Status"));
  } else {
    try {
      const fileStr = logo;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "successfully image add");
      try {
        const result = new QuranAppModel({
          logo: uploadResponse.url,
          appName,
          publisher,
          curVer,
          compDate,
          status,
        });
        await result.save();
        return res.status(200).json({ message: "App Added" });
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

QuranAppAndroidGet = async (req, res) => {
  // checkField;
  const result = await QuranAppModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

QuranAppAndroidDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("App ID"));
  } else {
    let resu = await QuranAppModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "App Not Found",
        });
      } else {
        await QuranAppModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "App Deleted",
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
  QuranAppAndroidAdd,
  QuranAppAndroidGet,
  QuranAppAndroidDel,
};
