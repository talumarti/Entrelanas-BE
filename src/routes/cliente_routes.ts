import { Router } from "express";
import { createClientes, deleteClientes, listClientes, getClientesById, updateClientes } from "../controllers/clientes/clientes_controller";

export const clienteRoutes = Router();

require('dotenv').config();

clienteRoutes.get('/list/clientes', listClientes);
clienteRoutes.get('/list/clientes/:id', getClientesById);
clienteRoutes.post('/createClientes', createClientes);
clienteRoutes.delete('/deleteClientes/:id', deleteClientes);
clienteRoutes.put('/updateClientes/:id', updateClientes);
