import express from 'express';
import {connect} from './config/bd/database'
import {endpointUsuario} from './app/routers/usuario.routers';
import {endpointExample} from './app/routers/example.routers'

export const app = express();
// static
app.use(express.static(__dirname + '/public'));

connect();
endpointExample();
endpointUsuario();



app.listen(3000,()=> console.log('Server on port 3000'));