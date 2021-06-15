const mongoose = require("mongoose");

const bDModel = mongoose.Schema({
    icon: {
        type: String
    },
    img: {
        type: String,
    },
    detail: {
        type: [{}],
    },
    bgColor: {
        type: String,
    },
    wid: {
        type: String,
    },
    hei: {
        type: String,
    }
});

const bDModelSchema = mongoose.model("bDModelSchema", bDModel);
module.exports = bDModelSchema;
