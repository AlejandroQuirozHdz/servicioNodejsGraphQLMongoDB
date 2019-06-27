import mongoose from 'mongoose';

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
             useCreateIndex: true, useNewUrlParser: true 
        });
        console.info("---> Base de datos Connected");
    } catch (e) {
        console.error("Error en la conexión de la base de datos");
        console.log("Error:"+e);
    }
}