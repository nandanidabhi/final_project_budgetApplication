const mongoose = require("mongoose")
// const nameModel = require("./model/budget")

const confiq=require('../config/config').get(process.env.NODE_ENV);

const validate = require("mongoose-validator")

var colorValidator = [
    validate({
        validator: 'matches',
        arguments: ['^#([A-Fa-f0-9]{6})$'],
        message: 'Color should be HexColor of length > 6'
    })
];

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    budget: {
        type: Number,
        trim: true,
        required: true,
    },
    backgroundColor: {
        type: String,
        trim: true,
        required: true,
        minlength: 6,
        validate: colorValidator,
    },
    userid:{
        type: String
    }
}, {collection: 'budget'})

module.exports = mongoose.model('budget', budgetSchema)