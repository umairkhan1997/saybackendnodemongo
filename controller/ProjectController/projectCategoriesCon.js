const projectCategoriesModel = require("../../model/ProjectCategoriesModel/projectCategoriesModel");

projectCategoryAdd = async (req, res) => {
  const { proIcon, proName, proDescrip, proHrefVal } = req.body;
  console.log(proIcon, proName, proDescrip, proHrefVal, "proHrefVal");

  try {
    const result = new projectCategoriesModel({
      proIcon,
      proName,
      proDescrip,
      proHrefVal,
    });
    await result.save();
    res.send({ message: "New Category Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

allProjectCategoryGet = async (req, res) => {
  const allCat = await projectCategoriesModel.find();
  res.status(200).json({
    success: true,
    data: allCat,
  });
};
projectCategoryUpdate = async (req, res, next) => {
  let catId = await projectCategoriesModel.findById(req.body.id);
  if (!catId) {
    return res.status(404).json({
      success: false,
      message: "Project Category not found",
    });
  }
  catId = await projectCategoriesModel.findByIdAndUpdate(
    req.body.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    message: "Project Category Updated",
    data: catId,
  });
};
projectCategoryDel = async (req, res, next) => {
  const { id } = req.body;
  let catId = await projectCategoriesModel.findById(id);
  try {
    if (!catId) {
      res.status(404).json({
        success: false,
        message: "Project Category Not Found",
      });
    } else {
      await projectCategoriesModel.findByIdAndDelete(id, function (
        err,
        result
      ) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Project Category Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  projectCategoryAdd,
  allProjectCategoryGet,
  projectCategoryUpdate,
  projectCategoryDel,
};
