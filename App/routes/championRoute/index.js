const express = require("express");
const router = express.Router();
const championCon = require("../../controller/championController/index");
const upload = require('../../../multer')
// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/championAdd", upload.array("imgCollection", 10), championCon.championAdd);
router.get("/championGet", championCon.championGet);
router.put("/championUpdate", upload.array("imgCollection", 10), championCon.championUpdate);


module.exports = router;