import { Router } from "express";
import { createProductos, deleteProductos, getProductosById, listProductos, updateProductos } from "../controllers/productos/productos_controller";
import { authenticateToken } from "../middleware/authorization";

export const productoRoutes = Router();

require('dotenv').config();

/*estas van relacionadas con postman:*/
productoRoutes.get('/list/productos', authenticateToken ,listProductos);
productoRoutes.get('/list/productos/:id', authenticateToken ,getProductosById);
productoRoutes.post('/createproductos',authenticateToken , createProductos);
productoRoutes.delete('/deleteproductos/:id',authenticateToken , deleteProductos);
productoRoutes.put('/updateproductos/:id',authenticateToken , updateProductos);