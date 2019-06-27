import {tasks} from '../samples/exampleContenido'

export const resolverExample={
        Query:{
            hello:()=>{
                return "Hola Alejandro"
            },
            greet(root, {name}){
                return `Hello ${name}!`;
            },
            tasks(){
                console.log("Datos:"+JSON.stringify(tasks));
                return tasks;
            },
            task(root, {_id}){
                console.log("Datos: "+_id);
                return tasks.find((n) => n._id == _id);
            }
        },

        Mutation : {
            createTask(_,{input}){
                input._id=tasks.length;
                tasks.push(input);
                return input
            }
        }
}
