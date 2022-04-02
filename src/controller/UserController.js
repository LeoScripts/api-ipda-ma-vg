
const UserController = {
  store(req,res){
    res.send('post store')
  },
  read(req,res){
    res.send('get read')
  },
  delete(req,res){
    res.send('delete ')
  }
};

module.exports = UserController;