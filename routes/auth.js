const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario,login,token} = require('../controllers/auth');

const router = Router();

//crear nuevo usuario
router.post('/new',[
  check('nombre','el nombre es obligatorio').not().isEmpty(),
  check('email','el email es obligatorio').isEmail(),
  check('password','el password es obligatorio').isLength({min:6})
] ,crearUsuario);

//login de usuario
router.post('/auth',[
  check('email','El email es obligatorio').isEmail(),
  check('password','El password es obligatorio').isLength({min:6})
], login);

//validar token 
router.get('/renew', token);


module.exports = router;