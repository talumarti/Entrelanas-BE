import { Router } from "express";
import { createClientes, deleteClientes, listClientes, getClientesById, updateClientes } from "../controllers/clientes/clientes_controller";
import { authenticateToken } from "../middleware/authorization";

export const clienteRoutes = Router();

require('dotenv').config();

/*ENDPOINTS:*/
clienteRoutes.get('/list/clientes',authenticateToken , listClientes);
clienteRoutes.get('/list/clientes/:id',authenticateToken , getClientesById);
clienteRoutes.post('/createClientes',authenticateToken , createClientes);
clienteRoutes.delete('/deleteClientes/:id',authenticateToken , deleteClientes);
clienteRoutes.put('/updateClientes/:id',authenticateToken , updateClientes);
