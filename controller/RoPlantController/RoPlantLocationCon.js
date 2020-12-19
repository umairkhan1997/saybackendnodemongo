const RoPlantLocationModel = require("../../model/RoPlant/RoPlantLocationModel");

RoPlantLocationAdd = async (req, res) => {
  const { name,
    area,
    mapLocation,
    underConstruction } = req.body;

  try {
    const result = new RoPlantLocationModel({
      name,
      area,
      mapLocation,
      underConstruction
    });
    await result.save();
    res.send({ message: "Ro Plant Location Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

RoPlantLocationGet = async (req, res) => {
  const result = await RoPlantLocationModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};
RoPlantLocationUpdate = async (req, res, next) => {
  let result = await RoPlantLocationModel.findById(req.body.id);
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Ro Plant Location not found",
    });
  }
  result = await RoPlantLocationModel.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Ro Plant Location Updated",
    data: result,
  });
};
RoPlantLocationDel = async (req, res, next) => {
  const { id } = req.body;
  let result = await RoPlantLocationModel.findById(id);
  try {
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Ro Plant Location Not Found",
      });
    } else {
      await RoPlantLocationModel.findByIdAndDelete(id, function (err, results) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Ro Plant Location Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  RoPlantLocationAdd,
  RoPlantLocationGet,
  RoPlantLocationUpdate,
  RoPlantLocationDel,
};
