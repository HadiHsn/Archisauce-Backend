const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FormDesignSchema = new Schema({
    email: {
        type: String,
        required: true 
    },
    advantages: {
        type: String,
        required: true 
    },
    disadvantages: {
        type: String,
        required: true
    }
});

const DesignForm = mongoose.model('DesignForm', FormDesignSchema);

exports.DesignForm = DesignForm;
