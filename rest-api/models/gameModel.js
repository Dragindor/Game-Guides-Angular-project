const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const gameSchema = new mongoose.Schema({
    _ownerId: {
        type: ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }}, 
    { timestamps: { createdOn: 'created_on' } });

module.exports = mongoose.model('Game', gameSchema);
