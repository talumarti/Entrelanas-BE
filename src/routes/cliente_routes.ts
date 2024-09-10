import { Router } from "express";
import { listClientes } from "../controllers/clientes/clientes_controller";
export const clienteRoutes = Router();

clienteRoutes.get('/list/clientes',listClientes);