const OnlineMasjidRegModel = require("../../model/OnlineMasjidReg/OnlineMasjidRegModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

OnlineMasjidRegAdd = async (req, res) => {
  const {
    stdName,
    fthName,
    stnAge,
    stnDob,
    stnGen,
    stnCour,
    stnEmail,
    stnSkype,
    stnNumber,
    stnWtsApp,
    stnImgUrl,
  } = req.body;
  // console.log(data, "imgurl");
  if (!stdName) {
    return res.status(400).json(checkField("Student Name"));
  } else if (!fthName) {
    return res.status(400).json(checkField("Father Name"));
  } else if (!stnAge) {
    return res.status(400).json(checkField("Student Age"));
  } else if (!stnDob) {
    return res.status(400).json(checkField("Student Date of birth"));
  } else if (!stnGen) {
    return res.status(400).json(checkField("Student Gender"));
  } else if (!stnCour) {
    return res.status(400).json(checkField("Student Course"));
  } else if (!stnSkype) {
    return res.status(400).json(checkField("Student Email"));
  } else if (!stnEmail) {
    return res.status(400).json(checkField("Student Skype"));
  } else if (!stnNumber) {
    return res.status(400).json(checkField("Student Number"));
  } else if (!stnWtsApp) {
    return res.status(400).json(checkField("Student Whats App"));
  } else if (!stnImgUrl) {
    return res.status(400).json(checkField("Student Image"));
  } else {
    try {
      const fileStr = stnImgUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new OnlineMasjidRegModel({
          stnImgUrl: uploadResponse.url,
          stdName,
          fthName,
          stnAge,
          stnDob,
          stnGen,
          stnCour,
          stnEmail,
          stnSkype,
          stnNumber,
          stnWtsApp,
        });
        await result.save();
        return res.status(200).json({ message: "Student Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

OnlineMasjidRegGet = async (req, res) => {
  // checkField;
  const result = await OnlineMasjidRegModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

OnlineMasjidRegDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Student ID"));
  } else {
    let resu = await OnlineMasjidRegModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Student Not Found",
        });
      } else {
        await OnlineMasjidRegModel.findByIdAndDelete(id, function (
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
  OnlineMasjidRegAdd,
  OnlineMasjidRegGet,
  OnlineMasjidRegDel,
};
