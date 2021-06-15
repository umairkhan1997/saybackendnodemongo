const express = require("express");
const router = express.Router();
const bankCon = require("../../Controller/bankController/index");


router.get("/bankGet", bankCon.bankDataGet);
module.exports = router;