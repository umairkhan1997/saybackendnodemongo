const mongoose = require("mongoose");


const citiesbranchesMd = mongoose.Schema({
    branchName: {
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
    mapLink: {
        type: String,
    },
    cityName: {
        type: String,
    },
});



const citiesbrancheSchema = mongoose.model("citiesbranche", citiesbranchesMd);
module.exports = citiesbrancheSchema;
