const express = require('express');


//crear servidor
const app = express()

//rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () =>{
  console.log(`Servidor corriendo en el puerto ${4000}`)
});