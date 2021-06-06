const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.authMassItAdmin = require("./authMassItAdmin/index");
db.smitAddForm = require("./SmitModel/SmitAdmissForm");
db.donation = require("./DonationModel/index");
db.branchesMd = require("./branchesModel/index");
db.intBranchesMd = require("./branchesModel/intBranch");
db.championMd = require("./championsModel/index");
db.eventMd = require("./eventModel/index");


module.exports = db;