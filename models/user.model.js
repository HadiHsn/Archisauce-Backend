const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('joi');
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true, 
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});


const User = mongoose.model('User', UserSchema);

//function to validate user 
function validateUser(user) {
    
    const schema = {
        firstName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).max(255).required()
    };
    const object = Joi.object(schema);
        
    const validation = object.validate(user);
    return validation;
}

exports.validate = validateUser;
exports.User = User;
