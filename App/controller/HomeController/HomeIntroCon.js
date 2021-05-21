const HomeIntroSchema = require("../../model/HomeModel/HomeIntroSchema");

homeIntroUpdate = async (req, res) => {
  const { id, data, introTxtOne, introTxtTwo } = req.body;
  const homeIntr = await HomeIntroSchema.findById(id);

  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "prime-asset",
    });

    try {
      if (!homeIntr) {
        return res
          .status(404)
          .send({ success: false, message: "Data Not Updated" });
      } else {
        let facData = {
          imgUrl: uploadResponse.url,
          introTxt,
        };
        const result = await HomeIntroSchema.findByIdAndUpdate(id, facData, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });
        return res
          .status(200)
          .send({ success: true, message: "Data Updated", data: result });
      }
    } catch (err) {
      return res.status(422).json({ success: false, message: err.message });
    }
  } catch (err) {
    // console.error(err, "err");
    res.status(500).json({ err: "Something went wrong" });
  }
};

homeIntroGet = async (req, res) => {
  const homeIntr = await HomeIntroSchema.find();
  res.status(200).json({
    success: true,
    data: homeIntr,
  });
};

module.exports = { homeIntroUpdate, homeIntroGet };
