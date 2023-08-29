'use strict'
const express = require ('express')
const {Router} = require ('express')
 const {createUser, listUser, deleteUser} = require('../controllers/user.controller')
const api = Router()

api.post('/create-user', createUser)
api.get('/list-users',listUser)
api.delete('/delete/:id', deleteUser)


module.exports = api
