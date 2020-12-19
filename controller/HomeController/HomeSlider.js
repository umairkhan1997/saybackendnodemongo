const HomeSchema = require("../../model/HomeModel/homeSliderSchema");
// require("../../cloudinary");
// const upload = require("../../multer");
// require("dotenv").config();
// const cloudinary = require("cloudinary");
const checkField = require("../../FieldValidation/checkField");
const cloudinary = require("../../cloudinary");

HomeSliderImgadd = async (req, res) => {
  const { data } = req.body;
  //console.log(data, "imgurl");
  if (!data) {
    return res.status(400).json(checkField("Image"));
  } else {
    try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "success");
      try {
        const imgUrls = new HomeSchema({ imgUrl: uploadResponse.url });
        await imgUrls.save();
        res.status(200).json({ msg: "Slider Image Added" });
        // res.send({ message: "Slider Image Added" });
      } catch (err) {
        return res.status(422).send(err + "err");
      }
    } catch (err) {
      // console.error(err, "err");
      res.status(500).json({ err: "Something went wrong" });
    }
  }
};

HomeSliderImgGet = async (req, res) => {
  const allImg = await HomeSchema.find();
  return res.status(200).json({
    success: true,
    data: allImg,
  });
};
HomeSliderImgUpdate = async (req, res, next) => {
  let imgUrl = await HomeSchema.findById(req.body.id);
  const { data } = req.body;
  //console.log(data, "imgurl");
  if (!data) {
    return res.status(400).json(checkField("Image"));
  } else if (!id) {
    return res.status(400).json(checkField("ID"));
  } else {
    try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      //console.log(uploadResponse, "success");
      if (!imgUrl) {
        return res.status(404).json({
          success: false,
          message: "Img not found",
        });
      } else {
        let homeData = {
          imgUrl: uploadResponse.url,
        };
        imgUrl = await HomeSchema.findByIdAndUpdate(req.body.id, homeData, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });
        return res.status(200).json({
          success: true,
          message: "Image url Updated",
          data: imgUrl,
        });
      }
    } catch (err) {
      // console.error(err, "err");
      return res.status(500).json({ err: "Something went wrong" });
    }
  }
};
HomeSliderImgDel = async (req, res, next) => {
  const { id } = req.body;
  let imgUrl = await HomeSchema.findById(id);
  // console.log(data, "imgurl");
  if (!id) {
    return res.status(400).json(checkField("ID"));
  } else {
    try {
      if (!imgUrl) {
        return res.status(404).json({
          success: false,
          message: "Image Not Found",
        });
      } else {
        await HomeSchema.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Image Deleted",
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
  HomeSliderImgadd,
  HomeSliderImgGet,
  HomeSliderImgUpdate,
  HomeSliderImgDel,
};
