const express = require("express");
const router = express.Router();
const bankCon = require("../../controller/bankController/index");


router.get("/bankGet", bankCon.bankDataGet);
module.exports = router;