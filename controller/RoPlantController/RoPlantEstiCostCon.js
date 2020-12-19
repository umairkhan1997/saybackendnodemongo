const RoPlantEstiCostModel = require("../../model/RoPlant/RoPlantEstiCostModel");

RoPlantEstiCostAdd = async (req, res) => {
  const { actDes, qnt, amount7500, amount40000 } = req.body;

  try {
    const result = new RoPlantEstiCostModel({ actDes, qnt, amount7500, amount40000 });
    await result.save();
    res.send({ message: "Ro Plant Cost Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

RoPlantEstiCostGet = async (req, res) => {
  const allCat = await RoPlantEstiCostModel.find();
  res.status(200).json({
    success: true,
    data: allCat,
  });
};
RoPlantEstiCostUpdate = async (req, res, next) => {
  let result = await RoPlantEstiCostModel.findById(req.body.id);
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Ro Plant not found",
    });
  }
  result = await RoPlantEstiCostModel.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Ro Plant Updated",
    data: result,
  });
};
RoPlantEstiCostDel = async (req, res, next) => {
  const { id } = req.body;
  let result = await RoPlantEstiCostModel.findById(id);
  try {
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Ro Plant Not Found",
      });
    } else {
      await RoPlantEstiCostModel.findByIdAndDelete(id, function (err, results) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Ro Plant Cost Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  RoPlantEstiCostAdd,
  RoPlantEstiCostGet,
  RoPlantEstiCostUpdate,
  RoPlantEstiCostDel,
};
