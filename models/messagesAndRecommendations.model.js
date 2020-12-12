const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessagesAndRecommendationsSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    subject: {
        type: String,
        required: true 
    },
    message: {
        type: String,
        required: true
    }
});

const MessagesAndRecommendations = mongoose.model('MessagesAndRecommendations', MessagesAndRecommendationsSchema);

exports.MessagesAndRecommendations = MessagesAndRecommendations;
