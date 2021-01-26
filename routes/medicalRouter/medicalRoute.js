const express = require("express");
const router = express.Router();
const benificiariesCountCon = require("../../controller/medicalController/benificiariesCountCon");
const patientTreatedCon = require('../../controller/medicalController/patientTreatedList')
const medicalServicesCon = require('../../controller/medicalController/medicalServices')
const opdDataCon = require('../../controller/medicalController/opdDataCon')
const opdNameCon = require('../../controller/medicalController/opdNameCon')

////////Benificiaries Count API
router.post("/benificiariesCountAdd", benificiariesCountCon.benificiariesCountAdd);
router.get("/benificiariesCountGet", benificiariesCountCon.benificiariesCountGet);


///////patient Treated API
router.post("/patientTreatedAdd", patientTreatedCon.patientTreatedAdd);
router.get("/patientTreatedGet", patientTreatedCon.patientTreatedGet);


////medical Services API
router.post("/medicalServiceAdd", medicalServicesCon.medicalServiceAdd);
router.get("/medicalServiceGet", medicalServicesCon.medicalServiceGet);


////OPD Data API
router.post("/opdListAdd", opdDataCon.opdListAdd);
router.get("/opdListGet", opdDataCon.opdListGet);

////OPD Name API
router.post("/opdNameAdd", opdNameCon.opdNameAdd);
router.get("/opdNameGet", opdNameCon.opdNameGet);


module.exports = router;
