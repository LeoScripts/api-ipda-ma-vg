const {v4 : uuidv4} = require ('uuid')

const UserModel = require("../database/models/UserModel");

const UserController = {
  async store(req,res){
    const id = uuidv4()

    console.log(id)
    // const {name,email,tel,msg} = req.body; 
    const user = await UserModel.create({
      id
    }) 
    // console.log(id,name,email,tel,msg)

    return res.status(200).json(user);

  },
  async read(req,res){
    const user = await UserModel.findAll()

    return res.status(200).send(user)
  }
};

module.exports = UserController;