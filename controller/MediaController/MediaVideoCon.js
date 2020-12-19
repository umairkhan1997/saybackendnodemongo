const MediaVideoSchema = require("../../model/mediaModel/mediaModelSchema");

mediaVideosAdd = async (req, res) => {
  const { medUrl, medName } = req.body;

  try {
    const result = new MediaVideoSchema({ medUrl, medName });
    await result.save();
    res.send({ message: "New Video Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

mediaAllVideoGet = async (req, res) => {
  const allVid = await MediaVideoSchema.find();
  res.status(200).json({
    success: true,
    data: allVid,
  });
};
mediaVideosUpdate = async (req, res, next) => {
  let vidId = await MediaVideoSchema.findById(req.body.id);
  if (!vidId) {
    return res.status(404).json({
      success: false,
      message: "Video not found",
    });
  }
  vidId = await MediaVideoSchema.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Video Updated",
    data: vidId,
  });
};
mediaVideoDel = async (req, res, next) => {
  const { id } = req.body;
  let vidId = await MediaVideoSchema.findById(id);
  try {
    if (!vidId) {
      res.status(404).json({
        success: false,
        message: "Video Not Found",
      });
    } else {
      await MediaVideoSchema.findByIdAndDelete(id, function (err, result) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Video Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  mediaVideosAdd,
  mediaAllVideoGet,
  mediaVideosUpdate,
  mediaVideoDel,
};
