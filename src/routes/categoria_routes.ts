import { Router } from "express";
import { createClientes, deleteClientes, listClientes, getClientesById, updateClientes } from "../controllers/clientes/clientes_controller";
import { authenticateToken } from "../middleware/authorization";
import { createCategoria, deleteCategoria, getCategoriaById, listCategoria, updateCategoria } from "../controllers/categorias/categorias_controller";

export const categoriaRoutes = Router();

require('dotenv').config();

/*ENDPOINTS:*/
categoriaRoutes.get('/list/categorias',authenticateToken , listCategoria);
categoriaRoutes.get('/list/categorias/:id',authenticateToken , getCategoriaById);
categoriaRoutes.post('/createcategorias',authenticateToken , createCategoria);
categoriaRoutes.delete('/deletecategorias/:id',authenticateToken , deleteCategoria);
categoriaRoutes.put('/updatecategorias/:id',authenticateToken , updateCategoria);