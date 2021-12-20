const moongose = require('mongoose')

const dbConnectio = async () => {
  try{
   await  moongose.connect(process.env.DB_CNN,{
     useNewUrlParser:true,
     useUnifiedTopology:true,
     
   })
   console.log('BD Online')
  }catch(error){
    console.log(error);
    throw new Error('error a la hora de conectar');
  }
}

module.exports = {
  dbConnectio
}