const mongoose = require("mongoose");

const authModel = mongoose.Schema({
    email: {
        type: String
    },
    pass: {
        type: String,
    },
    userName: {
        type: String,
    },
    city: {
        type: String
    }
});

const authMassItAdminSchema = mongoose.model("authMassItAdminSchema", authModel);
module.exports = authMassItAdminSchema;
