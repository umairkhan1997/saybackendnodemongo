const express = require("express");
const router = express.Router();
const OnlineMasjidRegCon = require("../../controller/OnlineMasjidRegController/OnlineMasjidRegCon");

//Online Isthikhara
router.post("/OnlineMasjidRegAdd", OnlineMasjidRegCon.OnlineMasjidRegAdd);
router.get("/OnlineMasjidRegGet", OnlineMasjidRegCon.OnlineMasjidRegGet);
router.delete("/OnlineMasjidRegDel", OnlineMasjidRegCon.OnlineMasjidRegDel);

module.exports = router;
