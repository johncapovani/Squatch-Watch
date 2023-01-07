const mongoose = require('mongoose')
const { Schema } = mongoose

const sightingSchema = new Schema({
    user:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    images:{
        type:String,
        default:''
    },
    description:{
        type:String,
        required:true
    }
},{
    //so we know when things were created or modified 
    timestamps: true
});

const Sighting = mongoose.model('Sighting', sightingSchema);

module.exports = Sighting;