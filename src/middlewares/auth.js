module.exports = (req,res,next) => {

  const key  = req.body.loginKey
  if(key === process.env.LOGINKEY){
    res.status(200).json({messge:"Connection sucess "})

    next()
  }
  res.status(401).json({message:"Unauthorized"})
}