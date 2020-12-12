const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FormConstructionSchema = new Schema({
    email: {
        type: String,
        required: true 
    },
    building: {
        type: String,
        required: true 
    },
    construction: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const ConstructionForm = mongoose.model('ConstructionForm', FormConstructionSchema);

exports.ConstructionForm = ConstructionForm;
