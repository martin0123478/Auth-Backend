const {response} = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = response) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      ok:false,
      errors:errors.mapped()
    })
  }
  const {email,name,password} = req.body
  console.log(email,name,password)
  return res.json({
    ok:true,
    msg:'crear usuario /new'
  })
}

const login = (req, res = response) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      ok:false,
      errors:errors.mapped()
    })
  }
  console.log(errors)
  const {email,password} = req.body
  console.log(email,password)
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