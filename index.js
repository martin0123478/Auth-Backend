const express = require('express');
const cors = require('cors');
const { dbConnectio } = require('./db/config');
require('dotenv').config();

//crear servidor
const app = express()

//Base de datos
dbConnectio();

//directorio publico
app.use(express.static('public'))

//cors
app.use(cors())

//lectura y parseo del body
app.use(express.json())


//rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () =>{
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});