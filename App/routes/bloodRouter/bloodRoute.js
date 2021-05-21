const express = require("express");
const router = express.Router();
const bloodIntroCon = require("../../controller/BloodBankController/bloodIntro");
const bloodBankAimCon = require("../../controller/BloodBankController/bloodBankAim");
const bloodBankServiceCon = require("../../controller/BloodBankController/bloodBnakService");
const bloodBankDataCon = require("../../controller/BloodBankController/bloodBankDataCon");


///blood Intro ROUTE
router.post("/bloodIntroAdd", bloodIntroCon.bloodIntroAdd);
router.get("/bloodIntroGet", bloodIntroCon.bloodIntroGet);


///blood AIM ROUTE
router.post("/bloodAimAdd", bloodBankAimCon.bloodAimAdd);
router.get("/bloodAimGet", bloodBankAimCon.bloodAimGet);


//blood Bank Service 
///blood AIM ROUTE
router.post("/bloodServiceAdd", bloodBankServiceCon.bloodServiceAdd);
router.get("/bloodServiceGet", bloodBankServiceCon.bloodServiceGet);

///blood Bank Data Con
router.post("/bloodBankDataAdd", bloodBankDataCon.bloodBankDataAdd);
router.get("/bloodBankDataGet", bloodBankDataCon.bloodBankDataGet);


module.exports = router;