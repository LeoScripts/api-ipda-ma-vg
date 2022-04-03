const {v4 : uuidv4} = require ('uuid')

const UserModel = require("../database/models/UserModel");

const UserController = {
  async store(req,res){
    const id = uuidv4();
    const {name,email,tel,msg} = req.body; 

    const user = await UserModel.create({
      id,name,email,tel,msg
    }); 

    return res.status(200).send('');

  },
  async read(req,res){
    const user = await UserModel.findAll();
    return res.status(200).json(user);
  }
};

module.exports = UserController;