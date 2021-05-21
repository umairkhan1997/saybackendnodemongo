// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     imgCollection: {
//         type: Array
//     }
// }, {
//     collection: 'users'
// })

// module.exports = mongoose.model('User', userSchema)


const mongoose = require("mongoose");

const SmitEvent = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDet: {
        type: String,
        required: true,
    },
    multiple_image: {
        type: [String],
        required: true,
    }
});

const SmitEventSchema = mongoose.model("SmitEventSchema", SmitEvent);
module.exports = SmitEventSchema;
