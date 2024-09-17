import { Router } from "express";
import { createClientes, deleteClientes, listClientes, getClientesById, updateClientes } from "../controllers/clientes/clientes_controller";
import { authenticateToken } from "../middleware/authorization";
import { createCategoria, deleteCategoria, getCategoriaById, listCategoria, updateCategoria } from "../controllers/categorias/categorias_controller";

export const categoriaRoutes = Router();

require('dotenv').config();

/*ENDPOINTS:*/
categoriaRoutes.get('/list/categorias', listCategoria);
categoriaRoutes.get('/list/categorias/:id', getCategoriaById);
categoriaRoutes.post('/createcategorias', createCategoria);
categoriaRoutes.delete('/deletecategorias/:id', deleteCategoria);
categoriaRoutes.put('/updatecategorias/:id', updateCategoria);