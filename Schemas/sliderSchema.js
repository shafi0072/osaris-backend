const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:String,
    pricing:Number,
    file:String,
    cat:{
        type:String,
        require: true
    },
    link:String,
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = sliderSchema;
