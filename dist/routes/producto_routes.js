"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoRoutes = void 0;
const express_1 = require("express");
const productos_controller_1 = require("../controllers/productos/productos_controller");
const authorization_1 = require("../middleware/authorization");
exports.productoRoutes = (0, express_1.Router)();
require('dotenv').config();
/*estas van relacionadas con postman:*/
exports.productoRoutes.get('/list/productos', authorization_1.authenticateToken, productos_controller_1.listProductos);
exports.productoRoutes.get('/list/productos/:id', authorization_1.authenticateToken, productos_controller_1.getProductosById);
exports.productoRoutes.post('/createproductos', authorization_1.authenticateToken, productos_controller_1.createProductos);
exports.productoRoutes.delete('/deleteproductos/:id', authorization_1.authenticateToken, productos_controller_1.deleteProductos);
exports.productoRoutes.put('/updateproductos/:id', authorization_1.authenticateToken, productos_controller_1.updateProductos);
