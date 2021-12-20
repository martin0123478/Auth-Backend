const {response} = require('express')


const crearUsuario = (req, res = response) =>{
  const {email,name,password} = req.body
  
  return res.json({
    ok:true,
    msg:'crear usuario /new'
  })
}

const login = (req, res = response) =>{
  
  const {email,password} = req.body
  
  return res.json({
    ok:true,
    msg:'Login de usuario'
  })
}

const token = (req, res) =>{
  return res.json({
    ok:true,
    msg:'renew'
  })
}

module.exports = {
  crearUsuario,
  login,
  token
}