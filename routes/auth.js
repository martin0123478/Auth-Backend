const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario,login, revalidarToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//crear nuevo usuario
router.post('/new',[
  check('name','el nombre es obligatorio').not().isEmpty(),
  check('email','el email es obligatorio').isEmail(),
  check('password','el password es obligatorio').isLength({min:6}),
  validarCampos
] ,crearUsuario);

//login de usuario
router.post('/auth',[
  check('email','El email es obligatorio').isEmail(),
  check('password','El password es obligatorio').isLength({min:6}),
  validarCampos
], login);

//validar token 
router.get('/renew',validarJWT, revalidarToken);


module.exports = router;