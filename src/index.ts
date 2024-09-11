import express, { Request, Response, Router } from 'express';

import pool from './database/conexion';
import { clienteRoutes } from './routes/cliente_routes';
import { productoRoutes } from './routes/producto_routes';
import { usersRoutes } from './routes/usuario_routes';
import { errorHandler } from './middleware/error';

require('dotenv').config();

const app=express();
const port = process.env.PORT;

app.use(express.json());
app.use(errorHandler);
app.use(clienteRoutes);
app.use(productoRoutes)
app.use(usersRoutes);

app.listen(3000,()=>{
    console.log("tu servidor esta corriendo en el puerto 3000");
});