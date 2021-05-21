const express = require("express");
const router = express.Router();
const OnlineQuranRegCon = require("../../controller/OnlineQuranRegController/OnlineQuranRegCon");

//Online Isthikhara
router.post("/OnlineQuranRegAdd", OnlineQuranRegCon.OnlineQuranRegAdd);
router.get("/OnlineQuranRegGet", OnlineQuranRegCon.OnlineQuranRegGet);
router.delete("/OnlineQuranRegDel", OnlineQuranRegCon.OnlineQuranRegDel);

module.exports = router;
