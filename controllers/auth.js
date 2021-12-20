const {response} = require('express')
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt')
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
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password,salt)
    //general JWT
    const token = await generarJWT(dbUser.id,name)
    //Crear usuario de BD
    await dbUser.save();


    //generar respuesta exitosa
    return res.status(201).json({
      ok:true,
      uid:dbUser.id,
      name,
      token
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok:false,
      msg:'Porfavor hable con el admin'
    })
  }


  
  
}

const login = async (req, res = response) =>{
  
  const {email,password} = req.body
  
  try {
    const dbUser = await Usuario.findOne({email});
    if(!dbUser){
      return res.status(400).json({
        ok:false,
        msg:'el correo no existe'

      })
    }

    //confirmar password
    const validPassword = bcrypt.compareSync(password,dbUser.password);
    if(!validPassword){
      return res.status(400).json({
        ok:false,
        msg:'el password no es valido'

      })
    }
    //jwt
    const token = await generarJWT(dbUser.id,dbUser.name)
    //respuesta del servicio
    return res.json({
      ok:true,
      uid:dbUser.id,
      name:dbUser.name,
      token:token
    })
    
  } catch (error) {
    console.log(error)
    return res.satatus(500).json({
      ok:false,
      msg:'hable con el administrador'
    })
  }

  
}


const revalidarToken =async (req, res=response) =>{
  const {uid,name} = req
  //jwt
  const token = await generarJWT(uid,name)
  return res.json({
    ok:true,
    uid,
    name,
    token
    
  })
}

module.exports = {
  crearUsuario,
  login,
  revalidarToken
}