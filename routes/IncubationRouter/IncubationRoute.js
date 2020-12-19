const express = require("express");
const router = express.Router();
const incubationIntroCon = require("../../controller/IncubationCenterController/incubationIntroCon");
const incubationCategoryCon = require("../../controller/IncubationCenterController/incubationCategoryCon");
const incubationMentorCon = require("../../controller/IncubationCenterController/incubationMentorCon");
const incubationUpcEveCon = require("../../controller/IncubationCenterController/incubationUpcEveCon");

//incubation intro routes
router.post("/incubationIntroAdd", incubationIntroCon.incubationIntroAdd);
router.get("/incubationIntroGet", incubationIntroCon.incubationIntroGet);
router.delete("/incubationIntroDel", incubationIntroCon.incubationIntroDel);

// incubation Categories routes
router.post("/incubationCatAdd", incubationCategoryCon.incubationCatAdd);
router.get("/incubationCatGet", incubationCategoryCon.incubationCatGet);
router.delete("/incubationCatDel", incubationCategoryCon.incubationCatDel);

// incubation Mentor routes
router.post("/incubationMentorAdd", incubationMentorCon.incubationMentorAdd);
router.get("/incubationMentorGet", incubationMentorCon.incubationMentorGet);
router.delete("/incubationMentorDel", incubationMentorCon.incubationMentorDel);

// incubation Event routes
router.post("/incubationUpcEveAdd", incubationUpcEveCon.incubationUpcEveAdd);
router.get("/incubationUpcEveGet", incubationUpcEveCon.incubationUpcEveGet);
router.delete("/incubationUpcEveDel", incubationUpcEveCon.incubationUpcEveDel);

module.exports = router;
