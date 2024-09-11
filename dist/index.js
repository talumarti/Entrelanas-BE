"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_routes_1 = require("./routes/cliente_routes");
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(cliente_routes_1.clienteRoutes);
app.listen(3000, () => {
    console.log("tu servidor esta corriendo en el puerto 3000");
});
