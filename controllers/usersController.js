
const userModel = require('../models/users')


const getUsers = function(req,res){
    userModel.find({},(err,users)=>{
        if(err) return res.status(500).send({message: `Request error:${err}`})
        if(!users) return res.status(400).send({message:`Not found:`})
    
        res.status(200).send({ users})
    })
}

const getUser = function(req,res){
    let idUser = req.params.userId
    userModel.findById(idUser,(err,user)=>{
        if(err) return res.status(500).send({message: `Request error:${err}`})
        if(!user) return res.status(400).send({message:`Not found:`})
    
        res.status(200).send({user})
    })
}

const postUser = function(req,res){
    let User = new userModel()
   User.userId = req.body.userId
   User.name = req.body.name
   User.userName = req.body.userName
   User.lastName = req.body.lastName
   User.dateBirth = req.body.dateBirth
   User.password = req.body.password
   User.registeredDate = req.body.registeredDate
   User.role = req.body.role
   User.email = req.body.email
   User.save((err,userStored)=>{
       if(err) return res.status(500).send({message: `Save failed:${err}`})

       res.status(200).send({userStored})
   })
}

const deleteUser= function(req,res){
    let userId = req.params.userId

    userModel.findById(userId,(err,user)=>{
        if(err) return res.status(500).send({message: `Request error: ${err}`})

        user.remove(err =>{
            if(err) res.status(500).send({message: `Error deleting ${err}`})

            res.status(200).send({message: 'User Deleted'})
        })
    })
}

const putUser = function(req,res){
    let userId = req.params.userId
    let updateUser = req.body
    userModel.findByIdAndUpdate(userId,updateUser,(err,userUpdated)=>{
        if(err) res.status(500).send({message: `Request error: ${err}` })

        res.status(200).send({userUpdated})
    })
}


module.exports = {
    getUser,
    getUsers,
    postUser,
    putUser,
    deleteUser
}