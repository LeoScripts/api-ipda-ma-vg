const {v4 : uuidv4} = require ('uuid')

const UserModel = require("../database/models/UserModel");

const UserController = {
  async store(req,res){
    const id = uuidv4();
    const {name,email,tel,msg, loginKey} = req.body; 

    if(tel != "" && name!= ""){
      const user = await UserModel.create({
        id,name,email,tel,msg
      }); 

      console.log(user)
  
      return res.status(200).json({message:"messagem criada com sucesso"});
    }
    return res.status(401).json({erro:"Por favor envie os dados"})
  },
  async read(req,res){
    const user = await UserModel.findAll();
    return res.status(200).json(user);
  }
};

module.exports = UserController;