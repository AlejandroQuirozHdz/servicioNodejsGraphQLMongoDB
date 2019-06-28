import graphqlHTTP from 'express-graphql';
import usuarioSchema from "../graphql/schemas/usuario.schema";
import {app} from '../../server';

export async function endpointUsuario(){
app.use('/graphqlUsuario',graphqlHTTP({
    graphiql:true,
    schema:usuarioSchema
}));
}