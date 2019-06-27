import {makeExecutableSchema} from 'graphql-tools';
import {resolverExample} from '../resolvers/example.resolver';

const typeDefs =`

    type Query {
        hello:String
        greet(name: String!): String
        tasks:[Task]
        task(_id:ID!):Task
    }

    type Task{
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type Mutation{
        createTask(input:InpuTask):Task
    }

    input InpuTask{
        title: String!
        description: String!
        number: Int
    }

    

`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolverExample
})