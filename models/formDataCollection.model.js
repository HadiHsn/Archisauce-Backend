const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FormDataCollectionSchema = new Schema({
    email: {
        type: String,
        required: true 
    },
    region: {
        type: String,
        required: true 
    },
    country: {
        type: String,
        required: true
    },
    peers: {
        type: String,
        required: true
    }
});

const DataCollectionForm = mongoose.model('DataCollectionForm', FormDataCollectionSchema);

exports.DataCollectionForm = DataCollectionForm;
