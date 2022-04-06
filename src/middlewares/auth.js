module.exports = (req,res,next) => {

  const key  = req.body.loginKey
  
  if(key !== process.env.LOGINKEY){
    res.status(401).json({"message":"unauthorized"})
  }else{
    res.status(200)
    next()
  }
}