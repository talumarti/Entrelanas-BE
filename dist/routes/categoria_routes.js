"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaRoutes = void 0;
const express_1 = require("express");
const authorization_1 = require("../middleware/authorization");
const categorias_controller_1 = require("../controllers/categorias/categorias_controller");
exports.categoriaRoutes = (0, express_1.Router)();
require('dotenv').config();
/*ENDPOINTS:*/
exports.categoriaRoutes.get('/list/categorias', authorization_1.authenticateToken, categorias_controller_1.listCategoria);
exports.categoriaRoutes.get('/list/categorias/:id', authorization_1.authenticateToken, categorias_controller_1.getCategoriaById);
exports.categoriaRoutes.post('/createcategorias', authorization_1.authenticateToken, categorias_controller_1.createCategoria);
exports.categoriaRoutes.delete('/deletecategorias/:id', authorization_1.authenticateToken, categorias_controller_1.deleteCategoria);
exports.categoriaRoutes.put('/updatecategorias/:id', authorization_1.authenticateToken, categorias_controller_1.updateCategoria);
