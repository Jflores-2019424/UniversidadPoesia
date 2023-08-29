'use stict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    carnet: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        format: "DD-MM-YYYY",
        required: true
    },
    course: {
        type: String,
        required: true
    },
    poetryType: {
        type: String,
        required: true
    },
    inscriptionDate: {
        type: Date,
        required: true
    },
    contestDay: {
        type: Date,
        format: "DD-MM-YYYY",
        required: true
    }
})

module.exports = mongoose.model("users",UserSchema)