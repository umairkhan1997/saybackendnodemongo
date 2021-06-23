const express = require("express");
const router = express.Router();

const DonationListCon = require("../../controller/DonationController/DonationList");
const donationCon = require("../../controller/DonationController/index");


router.get("/DonaListGet", DonationListCon.DonaListGet);
router.post("/DonaListAdd", DonationListCon.DonaListAdd);




// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/donationAdd", donationCon.donationAdd);
router.get("/donationDataGet", donationCon.donationDataGet);
router.put("/donationDataUpdate", donationCon.specificdonationUpdate);
router.post("/getSpeDonation", donationCon.getSpecificDataDonation);
router.post("/getSpeDataDona", donationCon.getSortedDataDonation);
router.post('/checkDonationResult', donationCon.checkDonationResult)

module.exports = router;