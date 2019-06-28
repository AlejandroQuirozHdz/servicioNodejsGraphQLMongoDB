import {Schema,model} from 'mongoose';

const usuarioSchema=new Schema({
    nombre:{
        type:String,
        required:true
    },
    primerApellido:String,
    segundoApellido:String,
    fechaNacimiento:Date,
    edad:Number
    
});


export default model('Usuarios',usuarioSchema);