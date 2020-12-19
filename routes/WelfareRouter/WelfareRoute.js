const express = require("express");
const router = express.Router();
const WelfareProjectCon = require("../../controller/WelFareController/WelfareProjectCon");

router.post("/WelfareProjectAdd", WelfareProjectCon.WelfareProjectAdd);
router.get("/WelfareProjectGet", WelfareProjectCon.WelfareProjectGet);
router.delete("/WelfareProjectDel", WelfareProjectCon.WelfareProjectDel);

module.exports = router;
