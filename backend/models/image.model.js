const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    photo: { type: String, required: true },
    description: {type: String, required: true},
    username:{ type: String, required: true},
}, {
    timestamps: true,    
});

module.exports = mongoose.model('Image', imageSchema);