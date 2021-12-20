const {response} = require('express')
const Usuario = require('../models/Usuario');

const crearUsuario = async(req, res = response) =>{
  const {email,name,password} = req.body
  
  try {
    //verificar email
    const usuario = await Usuario.findOne({email:email})

    if(usuario){
      return res.status(400).json({
        ok:false,
        msg:'El usuario ya existe con ese mail'
      });
    }
    //crear usuario con el modelo
    const dbUser = new Usuario(req.body);

    //hashear contraseña

    //general JWT

    //Crear usuario de BD
    await dbUser.save();


    //generar respuesta exitosa
    return res.status(201).json({
      ok:true,
      uid:dbUser.id,
      name
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok:false,
      msg:'Porfavor hable con el admin'
    })
  }


  
  
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