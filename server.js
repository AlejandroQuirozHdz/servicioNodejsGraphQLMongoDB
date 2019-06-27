import express from 'express';
import graphqlHTTP from 'express-graphql';
import exampleSchema from "./schemas/example.schema";
import {connect} from './config/bd/database'

const app = express();
connect();

app.set('/',(req,res)=>{
    res.json({message:'Hello Alejandro'});
});

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:exampleSchema
}))

app.listen(3000,()=> console.log('Server on port 3000'));