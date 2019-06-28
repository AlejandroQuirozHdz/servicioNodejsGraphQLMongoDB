import {makeExecutableSchema} from 'graphql-tools';
import {resolverUsuario} from '../resolvers/usuario.resolver';

const typeDefs =`
    type Query{
        usuarios:[Usuarios]
        usuario(input:UsuarioSearch):Usuarios
    }

    type Usuarios{
        _id:ID
        nombre:String!
        primerApellido:String!
        segundoApellido:String
        fechaNacimiento:String!
        edad:Int
    }

    input UsuarioUpdate{
        _id:ID
        nombre:String!
        primerApellido:String!
        segundoApellido:String
        fechaNacimiento:String!
        edad:Int
    }

    input UsuarioSearch{
        _id:ID
        nombre:String
        primerApellido:String
        segundoApellido:String
        fechaNacimiento:String
        edad:Int
    }

    input Usuario{
        nombre:String!
        primerApellido:String!
        segundoApellido:String
        fechaNacimiento:String!
        edad:Int
    }

    type Mutation{
        createUsuario(input:Usuario):Usuarios
        updateUsuario(input:UsuarioUpdate):Usuarios
        deleteUsuario(_id:ID!):Usuarios
    }

`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolverUsuario
})