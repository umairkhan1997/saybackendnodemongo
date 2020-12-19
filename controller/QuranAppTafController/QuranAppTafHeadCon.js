const mongoose = require("mongoose");
const QuranAppTafHeadSchema = require("../../model/QuranAppTaf/QuranAppTafHead");

QuranAppTafHeadAdd = async (req, res) => {
  const { headOne, headOneTxt, headTwo, headTwoTxt } = req.body;
  try {
    const result = new QuranAppTafHeadSchema({
      headOne,
      headOneTxt,
      headTwo,
      headTwoTxt,
    });
    await result.save();
    res.send({ message: "New Quran App Head Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

QuranAppTafHeadUpdate = async (req, res) => {
  const { id, headOne, headOneTxt, headTwo, headTwoTxt } = req.body;
  const results = await QuranAppTafHeadSchema.findById(id);

  try {
    if (!results) {
      res.status(404).send({ success: false, message: "Data Not Updated" });
    } else {
      const result = await QuranAppTafHeadSchema.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
      res
        .status(200)
        .send({ success: true, message: "Data Updated", data: result });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

QuranAppTafHeadGet = async (req, res) => {
  const result = await QuranAppTafHeadSchema.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  QuranAppTafHeadAdd,
  QuranAppTafHeadUpdate,
  QuranAppTafHeadGet,
};
