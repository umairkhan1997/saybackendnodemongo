const express = require("express");
const router = express.Router();
const championCon = require("../../controller/championController/index");

// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/championAdd", championCon.championAdd);
router.get("/championGet", championCon.championGet);
router.put("/championUpdate", championCon.championUpdate);


module.exports = router;