const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.authMassItAdmin = require("./authMassItAdmin/index");
db.smitAddForm = require("./SmitModel/SmitAdmissForm");
db.donation = require("./DonationModel/index");

module.exports = db;