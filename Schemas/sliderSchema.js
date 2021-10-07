const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:String,
    pricing:Number,
    cat:{
        type:String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = sliderSchema;
