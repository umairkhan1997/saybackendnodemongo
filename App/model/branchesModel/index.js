const mongoose = require("mongoose");


const branchesMd = mongoose.Schema({
    city: {
        type: String,
    },
    zone: {
        type: String,
    },
    address: {
        type: String,
    },
    ph: {
        type: String,
    },
    fax: {
        type: String,
    },
});



const branchesMdSchema = mongoose.model("branchesMd", branchesMd);
module.exports = branchesMdSchema;
