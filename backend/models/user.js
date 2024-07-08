const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
        match: /^[a-zA-Z]+$/   
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        match: /^[a-zA-Z]+$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'others'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        validate: {
            validator: function(v) {
                const minAge = 14;
                const maxAge = 99;
                const age = new Date().getFullYear() - v.getFullYear();
                return age >= minAge && age <= maxAge;
            },
            message: props => `${props.value} is not a valid date of birth! Must be older than 14 years and less than 99 years.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;
