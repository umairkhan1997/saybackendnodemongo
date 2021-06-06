const mongoose = require("mongoose");


const intBranchesMd = mongoose.Schema({
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
    charity: {
        type: String,
    },
    link: {
        type: String,
    },
});



const intBranchesMdSchema = mongoose.model("intBranchesMd", intBranchesMd);
module.exports = intBranchesMdSchema;
