const mongoose = require('mongoose');


const Home = mongoose.Schema({
    imgUrl:{
        type:String,
        unique:true,
        required:true
    }
})


const HomeSchema = mongoose.model('HomeSchema',Home);
module.exports = HomeSchema;