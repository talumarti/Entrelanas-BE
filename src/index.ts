import express, { Request, Response, Router } from 'express';

import pool from './database/conexion';
import { clienteRoutes } from './routes/cliente_routes';
import { productoRoutes } from './routes/producto_routes';
import { usersRoutes } from './routes/users_routes';
import { errorHandler } from './middleware/error';
import { categoriaRoutes } from './routes/categoria_routes';
import cors from "cors";

require('dotenv').config();

const app=express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use(clienteRoutes);
app.use(productoRoutes)
app.use(usersRoutes);
app.use(categoriaRoutes);

app.listen(3000,()=>{
    console.log("tu servidor esta corriendo en el puerto 3000");
});