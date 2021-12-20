const { response } = require("express");
const { json } = require("express/lib/response");
const jwt = require('jsonwebtoken')


const validarJWT = (req,res=response,next) =>{
  const token = req.header('x-token')
  if(!token){
    return res.status(404).json({
      ok:false,
      msg:'error en el toekn'
    })
  }

  try {
    const {uid,name} = jwt.verify(token, process.env.SECRET_JWT_SEED)
    console.log(uid,name)
    req.id = uid;
    req.name = name
  } catch (error) {
    return res.status(401).json({
      ok:false,
      mgs:'token no valido'
    })
  }
  next()
}

module.exports = {
  validarJWT
}