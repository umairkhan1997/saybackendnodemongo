const express = require("express");
const router = express.Router();
const benificiariesCountCon = require("../../controller/medicalController/benificiariesCountCon");
const patientTreatedCon = require('../../controller/medicalController/patientTreatedList')
const medicalServicesCon = require('../../controller/medicalController/medicalServices')

////////Benificiaries Count API
router.post("/benificiariesCountAdd", benificiariesCountCon.benificiariesCountAdd);
router.get("/benificiariesCountGet", benificiariesCountCon.benificiariesCountGet);


///////patient Treated API
router.post("/patientTreatedAdd", patientTreatedCon.patientTreatedAdd);
router.get("/patientTreatedGet", patientTreatedCon.patientTreatedGet);


////medical Services API
router.post("/medicalServiceAdd", medicalServicesCon.medicalServiceAdd);
router.get("/medicalServiceGet", medicalServicesCon.medicalServiceGet);


module.exports = router;
