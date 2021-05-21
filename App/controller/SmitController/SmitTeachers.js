const SmitTeachersModel = require("../../model/SmitModel/SmitTeachersModel");
const cloudinary = require("../../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

SmitTeachersadd = async (req, res) => {
  const { data, facName, facDesig, course } = req.body;
  // console.log(data, "imgurl");
  if (!facName) {
    return res.status(400).json(checkField("faculty Name"));
  } else if (!facDesig) {
    return res.status(400).json(checkField("faculty Designation"));
  } else if (!course) {
    return res.status(400).json(checkField("faculty course"));
  } else if (!data) {
    return res.status(400).json(checkField("faculty Image"));
  } else {
    // try {
    //   const fileStr = req.body.data;
    //   const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    //     upload_preset: "prime-asset",
    //   });
    // console.log(uploadResponse, "successfully image add");
    try {
      const result = new SmitTeachersModel({
        facName,
        facDesig,
        // facImgUrl: uploadResponse.url,
        facImgUrl: data,
        course,
      });
      await result.save();
      return res.status(200).json({ message: "Faculty Added" });
      // console.log("Faculty Added");
    }
    catch (err) {
      return res.status(422).send({ message: err.message });
      // console.log(err, "err");
    }
  }
  //   catch (err) {
  //     // console.error(err, "err");
  //     return res.status(500).json({ message: err.message });
  //     // console.log(err, "err 500");
  //   }
  // }
};

SmitTeachersGet = async (req, res) => {
  // checkField;
  const result = await SmitTeachersModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

SmitTeachersUpdate = async (req, res, next) => {
  const { id, data, facName, facDesig, facDescrip } = req.body;
  if (!facName) {
    return res.status(400).json(checkField("faculty Name"));
  } else if (!id) {
    return res.status(400).json(checkField("faculty ID"));
  } else if (!facDesig) {
    return res.status(400).json(checkField("faculty Designation"));
  } else if (!facDescrip) {
    return res.status(400).json(checkField("faculty Description"));
  } else if (!data) {
    return res.status(400).json(checkField("faculty Image"));
  } else {
    try {
      let imgUrl = await SmitTeachersModel.findById(req.body.id);
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });

      try {
        if (!imgUrl) {
          console.log(res, "Faculty not found");
          return res.status(404).json({
            success: false,
            message: "Faculty not found",
          });
        } else {
          let facData = {
            facName,
            facDesig,
            facImgUrl: uploadResponse.url,
            facDescrip,
          };
          imgUrl = await SmitTeachersModel.findByIdAndUpdate(
            req.body.id,
            facData,
            {
              new: true,
              runValidators: true,
              useFindAndModify: false,
            }
          );
          console.error(res, "200 res");
          return res.status(200).json({
            success: true,
            message: "Faculty Updated",
            data: imgUrl,
          });
        }
      } catch (err) {
        console.error(err, "err 422");
        return res.status(422).send({ success: false, message: err.message });
      }
    } catch (err) {
      console.error(err, "err 500");
      return res.status(500).json({ success: false, message: err.message });
    }
  }
};

SmitTeachersDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("faculty ID"));
  } else {
    let imgUrl = await SmitTeachersModel.findById(id);
    try {
      if (!imgUrl) {
        return res.status(404).json({
          success: false,
          message: "Faculty Not Found",
        });
      } else {
        await SmitTeachersModel.findByIdAndDelete(id, function (err, result) {
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
  SmitTeachersadd,
  SmitTeachersGet,
  SmitTeachersUpdate,
  SmitTeachersDel,
};
