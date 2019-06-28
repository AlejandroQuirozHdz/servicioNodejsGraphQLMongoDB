import * as controller from '../../controllers/usuario.controller';

export const resolverUsuario={
    Query:{
        async usuarios(){
            return controller.consultaUsuarios();
        },
        async usuario(root,{input}){
            return controller.consultaUsuario(input);
        }
    },

    Mutation:{
        async createUsuario(_,{input}){
          return controller.guardadoUsuario(input);
        },
        async updateUsuario(_,{input}){
          return controller.actualizarUsuario(input);  
        },
        async deleteUsuario(_,{_id}){
          return controller.eliminarUsuario(_id);
        }
    }
};