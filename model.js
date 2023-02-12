const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim: true,
        maxlength : 20,
    },

    cash:{
        type: Number,
        default: 0,
    }
});

const documentModel = mongoose.model('playerData',schema);

module.exports = documentModel;