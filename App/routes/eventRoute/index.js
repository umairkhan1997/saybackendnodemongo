const express = require("express");
const router = express.Router();
const eventCon = require("../../controller/eventCon/index");
const upload = require('../../../multer')
// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/eventAdd", upload.array("imgCollection", 10), eventCon.eventAdd);
router.get("/eventGet", eventCon.eventGet);
router.put("/eventUpdate", upload.array("imgCollection", 10), eventCon.eventUpdate);


module.exports = router;