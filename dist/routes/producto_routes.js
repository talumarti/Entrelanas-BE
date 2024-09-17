"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoRoutes = void 0;
const express_1 = require("express");
const productos_controller_1 = require("../controllers/productos/productos_controller");
exports.productoRoutes = (0, express_1.Router)();
require('dotenv').config();
/*estas van relacionadas con postman:*/
exports.productoRoutes.get('/list/productos', productos_controller_1.listProductos);
exports.productoRoutes.get('/list/productos/:id', productos_controller_1.getProductosById);
exports.productoRoutes.post('/createproductos', productos_controller_1.createProductos);
exports.productoRoutes.delete('/deleteproductos/:id', productos_controller_1.deleteProductos);
exports.productoRoutes.put('/updateproductos/:id', productos_controller_1.updateProductos);
