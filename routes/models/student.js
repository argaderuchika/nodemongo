const mongoose = require('mongoose')

let StudentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    class:{
        type:String,
        required:true
    },
    status:{
        type: Boolean,
        required: true,
        default: false
    }
})


module.exports = mongoose.model('Students',StudentSchema);
