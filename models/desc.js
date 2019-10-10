const mongoose = require('mongoose');

const descSchema = new mongoose.Schema({

        desc:{
            type:String,
            required:true
        },
        dateOfTask:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        }


});

const Desc = mongoose.model('Desc' , descSchema);


module.exports = Desc;