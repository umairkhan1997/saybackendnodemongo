const express = require("express");
const router = express.Router();
const JobBankContactCon = require("../../controller/JobBankController/JobBankContactCon");
const JobBankJobHuntCon = require("../../controller/JobBankController/JobBankJobHuntCon");
const JobBankPopCatCon = require("../../controller/JobBankController/JobBankPopCatCon");

router.post("/JobBankJobHuntAdd", JobBankJobHuntCon.JobBankJobHuntAdd);
router.get("/JobBankJobHuntGet", JobBankJobHuntCon.JobBankJobHuntGet);
router.put("/JobBankJobHuntUpdate", JobBankJobHuntCon.JobBankJobHuntUpdate);
router.delete("/JobBankJobHuntDel", JobBankJobHuntCon.JobBankJobHuntDel);

router.post("/JobBankPopCatAdd", JobBankPopCatCon.JobBankPopCatAdd);
router.get("/JobBankPopCatGet", JobBankPopCatCon.JobBankPopCatGet);
router.delete("/JobBankPopCatDel", JobBankPopCatCon.JobBankPopCatDel);

module.exports = router;
