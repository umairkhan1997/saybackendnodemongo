const express = require("express");
const router = express.Router();

const DonationListCon = require("../../controller/DonationController/DonationList");


router.get("/DonaListGet", DonationListCon.DonaListGet);
router.post("/DonaListAdd", DonationListCon.DonaListAdd);

module.exports = router;