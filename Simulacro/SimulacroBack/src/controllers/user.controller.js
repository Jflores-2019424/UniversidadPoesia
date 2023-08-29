'use strict'

const User = require('../models/user.model')

const createUser = async (req,res)=>{
    const {carnet} = req.body;
    try{
       let user = await User.findOne({carnet: carnet})
       if(user){
        return res.status(400).send({
            ok: false,
            message: 'carnet ya utilizado',
            user: user
        })
       }
       user = new User(req.body)
    
       user = await user.save()

       res.status(200).send({
        message: `registrado`,
            ok: true,
            usuario: user,
    });

    }catch(er){
        throw new Error(er)
    }
}

const listUser = async(req, res) =>{
    try{
        const users = await User.find()
        if(!users){
            res.status(400).send({
                message: 'No se encontraron participantes'
            })
        }
        res.status(200).send({users: users})
    }catch(er){
        throw new Error(er)
    }
}

const deleteUser = async(req, res) =>{
    try{
        const id = req.params.id;
        const userDelete = await User.findByIdAndDelete(id);
        return res
          .status(200)
          .send({ message: "usuario eliminado correctamente", userDelete });
    }catch(err){
        throw new Error(err)
    }
};




module.exports = {createUser, listUser, deleteUser}