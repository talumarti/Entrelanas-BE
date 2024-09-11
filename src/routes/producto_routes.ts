import { Router } from "express";
import { createProductos, deleteProductos, getProductosById, listProductos, updateProductos } from "../controllers/productos/productos_controller";


export const productoRoutes = Router();

require('dotenv').config();
/*estas van relacionadas con postman:*/
productoRoutes.get('/list/productos', listProductos);
productoRoutes.get('/list/productos/:id', getProductosById);
productoRoutes.post('/createproductos', createProductos);
productoRoutes.delete('/deleteproductos/:id', deleteProductos);
productoRoutes.put('/updateproductos/:id', updateProductos);