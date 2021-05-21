const SmitContactModel = require("../../model/SmitModel/SmitContactModel");

SmitContactAdd = async (req, res) => {
  const { address, uanNum, email } = req.body;

  try {
    const result = new SmitContactModel({ address, uanNum, email });
    await result.save();
    res.send({ message: "SMIT Contact Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

SmitContactGet = async (req, res) => {
  const result = await SmitContactModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};
SmitContactUpdate = async (req, res, next) => {
  let result = await SmitContactModel.findById(req.body.id);
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "SMIT Contact Not found",
    });
  }
  result = await SmitContactModel.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "SMIT Contact Updated",
    data: result,
  });
};
// SmitContactDel = async (req, res, next) => {
//   const { id } = req.body;
//   let counId = await SmitContactModel.findById(id);
//   try {
//     if (!counId) {
//       res.status(404).json({
//         success: false,
//         message: "SMIT Contact Not Found",
//       });
//     } else {
//       await SmitContactModel.findByIdAndDelete(id, function (err, result) {
//         if (err) {
//           res.status(422).json({
//             success: false,
//             message: err.message,
//           });
//         } else {
//           res.status(200).json({
//             success: true,
//             message: "SMIT Contact Deleted",
//           });
//         }
//       });
//     }
//   } catch (err) {
//     res.status(422).json({ success: false, message: err.message });
//   }
// };

module.exports = {
  SmitContactAdd,
  SmitContactGet,
  SmitContactUpdate,
};
