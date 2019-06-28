import graphqlHTTP from 'express-graphql';
import exampleSchema from "../graphql/schemas/example.schema";
import {app} from '../../server';

export async function endpointExample(){
app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:exampleSchema
}));
}