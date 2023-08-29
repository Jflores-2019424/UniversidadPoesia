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
        type: String,
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
        type: String,
        required: true
    },
    contestDay: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("users",UserSchema)