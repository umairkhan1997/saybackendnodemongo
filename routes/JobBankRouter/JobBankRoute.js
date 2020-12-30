const express = require("express");
const router = express.Router();
const JobBankContactCon = require("../../controller/JobBankController/JobBankContactCon");
const JobBankJobHuntCon = require("../../controller/JobBankController/JobBankJobHuntCon");
const JobBankPopCatCon = require("../../controller/JobBankController/JobBankPopCatCon");
const JobBnakFormCon = require('../../controller/JobBankController/JobBnakFormCon');
const JobBankOffFormCon = require('../../controller/JobBankController/JobBankOffForm');

const upload = require('../../multer')


router.post("/jobBankFormAdd", upload.array("imgCollection", 10), JobBnakFormCon.jobBankFormAdd);
router.post("/JobBankOffFormAdd", JobBankOffFormCon.JobBankOffFormAdd);
router.get("/jobBankFormGet", JobBnakFormCon.jobBankFormGet);

router.post("/JobBankJobHuntAdd", JobBankJobHuntCon.JobBankJobHuntAdd);
router.get("/JobBankJobHuntGet", JobBankJobHuntCon.JobBankJobHuntGet);
router.put("/JobBankJobHuntUpdate", JobBankJobHuntCon.JobBankJobHuntUpdate);
router.delete("/JobBankJobHuntDel", JobBankJobHuntCon.JobBankJobHuntDel);

router.post("/JobBankPopCatAdd", JobBankPopCatCon.JobBankPopCatAdd);
router.get("/JobBankPopCatGet", JobBankPopCatCon.JobBankPopCatGet);
router.delete("/JobBankPopCatDel", JobBankPopCatCon.JobBankPopCatDel);

module.exports = router;
