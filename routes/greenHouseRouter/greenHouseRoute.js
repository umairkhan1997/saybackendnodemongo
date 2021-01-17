const express = require("express");
const router = express.Router();
const schoolCountCon = require("../../controller/greenHouseController/schoolCountCon");
const schoolCampusCon = require("../../controller/greenHouseController/schoolCampusCon");
const schoolFeatureCon = require("../../controller/greenHouseController/schoolFeatureCon");
const schoolTeacherCon = require("../../controller/greenHouseController/schoolTeacherCon");



///////////////SCHOOL Count Router
router.post("/schoolCountAdd", schoolCountCon.schoolCountAdd);
router.get("/schoolCountGet", schoolCountCon.schoolCountGet);

///////////////SCHOOL Count Router
router.post("/schoolCampusAdd", schoolCampusCon.schoolCampusAdd);
router.get("/schoolCampusGet", schoolCampusCon.schoolCampusGet);

///////////////SCHOOL Feature Router
router.post("/schoolFeatureAdd", schoolFeatureCon.schoolFeatureAdd);
router.get("/schoolFeatureGet", schoolFeatureCon.schoolFeatureGet);


///////////////SCHOOL Feature Router
router.post("/schoolTeacherAdd", schoolTeacherCon.schoolTeacherAdd);
router.get("/schoolTeacherGet", schoolTeacherCon.schoolTeacherGet);


module.exports = router;
