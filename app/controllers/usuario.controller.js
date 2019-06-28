import * as crud from './crud.controller';
import User from '../models/usuario.model';

export async function guardadoUsuario(usuario){
        let newUser= User(usuario);
      return crud.saveAndUpdate(newUser);
}

export async function actualizarUsuario (usuario){
        let usuarioBD=crud.findOne(usuario._id,User);

        if(usuarioBD=!null){
            if(usuario.nombre) usuarioBD.nombre=usuario.nombre;

            if(usuario.primerApellido) usuarioBD.primerApellido=usuario.primerApellido;

            if(usuario.segundoApellido) usuarioBD.segundoApellido=usuario.segundoApellido;

            if(usuario.fechaNacimiento) usuarioBD.fechaNacimiento=usuario.fechaNacimiento;

            if(usuario.edad) usuarioBD.edad=usuario.edad;

            return crud.saveAndUpdate(usuarioBD);
        }
}

export async function consultaUsuarios(query){
    return crud.search(query,User);
}

export async function eliminarUsuario(id){
    return crud.deletes(id,User);
}

export async function consultaUsuario(query){
    return crud.findOne(query,User);
}