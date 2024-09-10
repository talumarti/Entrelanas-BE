"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const clientes_controller_1 = require("../controllers/clientes/clientes_controller");
exports.clienteRoutes = (0, express_1.Router)();
exports.clienteRoutes.get('/list/clientes', clientes_controller_1.listClientes);
