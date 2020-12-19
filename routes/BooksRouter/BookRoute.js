const express = require("express");
const router = express.Router();
const bookSpecialCon = require("../../controller/BookController/bookSpecialCon");
const BooksAllCon = require("../../controller/BookController/BooksAllCon");
const upload = require('../../multer')
///SPECIAL BOOKS ROUTE
router.post("/BookSpecialAdd", upload.array("imgCollection", 12), bookSpecialCon.BookSpecialAdd);
router.get("/BookSpecialGet", bookSpecialCon.BookSpecialGet);
router.delete("/BookSpecialDel", bookSpecialCon.BookSpecialDel);

///ALL BOOKS ROUTE
router.post("/BooksAllAdd", upload.array("imgCollection", 12), BooksAllCon.BooksAllAdd);
router.get("/BooksAllGet", BooksAllCon.BooksAllGet);
router.delete("/BooksAllDel", BooksAllCon.BooksAllDel);

module.exports = router;
