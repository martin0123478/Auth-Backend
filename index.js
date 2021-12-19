const express = require('express');


//crear servidor
const app = express()

//GET
app.get('/', (req, res)=>{
res
});

app.listen(4000, () =>{
  console.log(`Servidor corriendo en el puerto ${4000}`)
});