import express, { Request, Response } from 'express';
import { clienteRoutes } from './routes/cliente_routes';
import pool from './database/conexion';

require('dotenv').config();

const app=express();
const port = process.env.PORT;

app.use(express.json());
app.use(clienteRoutes);

app.listen(3000,()=>{
    console.log("tu servidor esta corriendo en el puerto 3000");
});