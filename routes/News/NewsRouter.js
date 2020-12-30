const express = require("express");
const router = express.Router();
const SaylaniNewsCon = require('../../controller/SaylaniNews/SaylaniNews');
const saylaniNews = require('../../model/NewsModel/NewsSchema')
const upload = require('../../multer')


router.post("/SaylaniNewsAdd", upload.array("imgCollection", 10), SaylaniNewsCon.SaylaniNewsAdd);

router.get('/SaylaniNewsGet', paginatedData(saylaniNews), (req, res) => {
    res.json(res.paginatedResult)
})

function paginatedData(model) {
    return async (req, res, next) => {
        const results = {}
        console.log(req.query)
        if (req.query.date == 'undefined') {
            console.log('console.log two')

            const { page, limit } = req.query
            const pages = parseInt(page);
            const limits = parseInt(limit)
            const startInx = (pages - 1) * limits;
            const endInx = pages * limits;
            const data = model.find().sort({ newsPostDate: -1 })
            if (startInx > 0) {
                results.prev = { page: pages - 1, limit: limits }
            }
            if (endInx < await data.countDocuments().exec()) {
                results.next = { page: pages + 1, limit: limits }
            }
            try {
                results.total = await saylaniNews.find();
                results.result = await data.find().limit(limits).skip(startInx).exec()
                res.paginatedResult = results;
                next();
            } catch (e) {
                res.status(500).json({ message: e.message })
            }
        } else {
            console.log('console.log three')
            results.result = await model.find({ newsdate: req.query.date }).sort({ date: 1 }).skip(0).limit(10)
            res.paginatedResult = results;
            next();
        }

    }
}




module.exports = router;