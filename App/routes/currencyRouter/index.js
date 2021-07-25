const express = require("express");
const router = express.Router();
const CurrencyCon = require("../../controller/currencyController/index");

router.post("/currencyadd", CurrencyCon.CurrencyAdd);
router.get("/currencyget", CurrencyCon.CurrencyGet);
router.put("/currencyupdate", CurrencyCon.CurrencyUpdate);
router.delete("/currencydel", CurrencyCon.CurrencyDel);



module.exports = router;
