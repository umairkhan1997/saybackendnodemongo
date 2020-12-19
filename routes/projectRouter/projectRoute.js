const express = require("express");
const router = express.Router();
const projectCategoriesCon = require("../../controller/ProjectController/projectCategoriesCon");

router.post("/projectCategoryAdd", projectCategoriesCon.projectCategoryAdd);
router.get(
  "/allProjectCategoryGet",
  projectCategoriesCon.allProjectCategoryGet
);
router.put(
  "/projectCategoryUpdate",
  projectCategoriesCon.projectCategoryUpdate
);
router.delete("/projectCategoryDel", projectCategoriesCon.projectCategoryDel);

module.exports = router;
