const WelfareProjectModel = require("../../model/Welfare/WelfareProject");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

WelfareProjectAdd = async (req, res) => {
  const { WelHead, WelHeadTwo, welImg, welDesc } = req.body;
  // console.log(data, "imgurl");
  if (!WelHead) {
    return res.status(400).json(checkField("Welfare Heading"));
  } else if (!WelHeadTwo) {
    return res.status(400).json(checkField("Welfare Second Heading"));
  } else if (!welImg) {
    return res.status(400).json(checkField("Welfare Image"));
  } else if (!welDesc) {
    return res.status(400).json(checkField("Welfare Description"));
  } else {
    try {
      const fileStr = welImg;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new WelfareProjectModel({
          WelHead,
          WelHeadTwo,
          welImg: uploadResponse.url,
          welDesc,
        });
        await result.save();
        return res.status(200).json({ message: "Welfare Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

WelfareProjectGet = async (req, res) => {
  // checkField;
  const result = await WelfareProjectModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

WelfareProjectDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Welfare ID"));
  } else {
    let resu = await WelfareProjectModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Welfare Not Found",
        });
      } else {
        await WelfareProjectModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Welfare Deleted",
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
  WelfareProjectAdd,
  WelfareProjectGet,
  WelfareProjectDel,
};
