const CurrencySchemas = require("../../model/currencyModel/index");

CurrencyAdd = async (req, res) => {
    const { label, value } = req.body;
    try {
        const result = new CurrencySchemas({
            label,
            value,
        });
        await result.save();
        res.send({ message: "New Currency Added" });
    } catch (err) {
        return res.status(422).send(err + "err");
    }
};

CurrencyUpdate = async (req, res) => {
    const { id } = req.body;
    const results = await CurrencySchemas.findById(id);

    try {
        if (!results) {
            res
                .status(404)
                .send({ success: false, message: "Currency Not Updated" });
        } else {
            const result = await CurrencySchemas.findByIdAndUpdate(
                id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                    useFindAndModify: false,
                }
            );
            res.status(200).send({
                success: true,
                message: "Currency Updated",
                data: result,
            });
        }
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
};

CurrencyDel = async (req, res, next) => {
    const { id } = req.body;
    let result = await CurrencySchemas.findById(id);
    try {
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Currency Not Found",
            });
        } else {
            await CurrencySchemas.findByIdAndDelete(id, function (err, results) {
                if (err) {
                    res.status(422).json({
                        success: false,
                        message: err.message,
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        message: "Currency Deleted",
                    });
                }
            });
        }
    } catch (err) {
        res.status(422).json({ success: false, message: err.message });
    }
};

CurrencyGet = async (req, res) => {
    const result = await CurrencySchemas.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    CurrencyAdd,
    CurrencyGet,
    CurrencyUpdate,
    CurrencyDel,
};
