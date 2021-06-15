const express = require("express");
const router = express.Router();
const doorStepCon = require("../../controller/doorStepController/index");


// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/doorStepAdd", doorStepCon.doorStepAdd);
router.get("/doorStepGet", doorStepCon.doorStepGet);

module.exports = router;