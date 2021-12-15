const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({

    name:{
        type:String,
        require: true
    },
    type:{
        type:String,
        require: true
    },
    facebook:{
        type: String,
        require: true,
    },
    twitter:{
        type:String,
        require: true
    },
    insta:{
        type:String,
        require: true
    },
    file:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now,
    }

});

module.exports = artistSchema;