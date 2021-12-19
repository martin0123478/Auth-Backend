const {Router} = require('express');
const { crearUsuario,login,token} = require('../controllers/auth');

const router = Router();

//crear nuevo usuario
router.post('/new', crearUsuario);

//login de usuario
router.post('/', login);

//validar token 
router.get('/renew', token);


module.exports = router;