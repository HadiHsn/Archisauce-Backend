const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MailingSubscriptionListSchema = new Schema({
    email: {
        type: String,
        required: true 
    }
});

const MailingSubscriptionList = mongoose.model('MailingSubscriptionList', MailingSubscriptionListSchema);

exports.MailingSubscriptionList = MailingSubscriptionList;
