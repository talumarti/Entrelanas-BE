"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const clientes_controller_1 = require("../controllers/clientes/clientes_controller");
exports.clienteRoutes = (0, express_1.Router)();
require('dotenv').config();
/*ENDPOINTS:*/
exports.clienteRoutes.get('/list/clientes', clientes_controller_1.listClientes);
exports.clienteRoutes.get('/list/clientes/:id', clientes_controller_1.getClientesById);
exports.clienteRoutes.post('/createClientes', clientes_controller_1.createClientes);
exports.clienteRoutes.delete('/deleteClientes/:id', clientes_controller_1.deleteClientes);
exports.clienteRoutes.put('/updateClientes/:id', clientes_controller_1.updateClientes);
