const express = require("express");
const router = express.Router();
const eventCon = require("../../controller/eventCon/index");

// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/eventAdd", eventCon.eventAdd);
router.get("/eventGet", eventCon.eventGet);
router.put("/eventUpdate", eventCon.eventUpdate);


module.exports = router;