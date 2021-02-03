const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citiSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
},{timestamps: true})

module.exports = mongoose.model("cities", citiSchema)