// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true,
    // validate: (value) => {
    //   return validator.validate(value);
    },
    password: String,
}, {__v: false})

module.exports =  mongoose.model('User', userSchema);
