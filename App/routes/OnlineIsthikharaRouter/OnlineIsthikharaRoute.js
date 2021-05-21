const express = require("express");
const router = express.Router();
const OnlineIsthikharaCon = require("../../controller/OnlineIsthikharaController/OnlineIsthikharaCon");

//Online Isthikhara
router.post("/OnlineIsthikharaAdd", OnlineIsthikharaCon.OnlineIsthikharaAdd);
router.get("/OnlineIsthikharaGet", OnlineIsthikharaCon.OnlineIsthikharaGet);
router.put(
  "/OnlineIsthikharaUpdate",
  OnlineIsthikharaCon.OnlineIsthikharaUpdate
);
router.delete("/OnlineIsthikharaDel", OnlineIsthikharaCon.OnlineIsthikharaDel);

module.exports = router;
