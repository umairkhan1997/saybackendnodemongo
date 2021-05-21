const express = require("express");
const router = express.Router();
const WelfareProjectCon = require("../../controller/WelFareController/WelfareProjectCon");
const welfareServiceCon = require("../../controller/WelFareController/welfareServiceCon");

router.post("/WelfareProjectAdd", WelfareProjectCon.WelfareProjectAdd);
router.get("/WelfareProjectGet", WelfareProjectCon.WelfareProjectGet);
router.delete("/WelfareProjectDel", WelfareProjectCon.WelfareProjectDel);


router.post("/WelfareServiceAdd", welfareServiceCon.WelfareServiceAdd);
router.get("/WelfareServiceGet", welfareServiceCon.WelfareServiceGet);
router.delete("/WelfareServiceDel", welfareServiceCon.WelfareServiceDel);

module.exports = router;
