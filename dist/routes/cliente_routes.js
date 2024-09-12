"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const clientes_controller_1 = require("../controllers/clientes/clientes_controller");
const authorization_1 = require("../middleware/authorization");
exports.clienteRoutes = (0, express_1.Router)();
require('dotenv').config();
/*ENDPOINTS:*/
exports.clienteRoutes.get('/list/clientes', authorization_1.authenticateToken, clientes_controller_1.listClientes);
exports.clienteRoutes.get('/list/clientes/:id', authorization_1.authenticateToken, clientes_controller_1.getClientesById);
exports.clienteRoutes.post('/createClientes', authorization_1.authenticateToken, clientes_controller_1.createClientes);
exports.clienteRoutes.delete('/deleteClientes/:id', authorization_1.authenticateToken, clientes_controller_1.deleteClientes);
exports.clienteRoutes.put('/updateClientes/:id', authorization_1.authenticateToken, clientes_controller_1.updateClientes);
