"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_routes_1 = require("./routes/cliente_routes");
const producto_routes_1 = require("./routes/producto_routes");
const users_routes_1 = require("./routes/users_routes");
const error_1 = require("./middleware/error");
const categoria_routes_1 = require("./routes/categoria_routes");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(error_1.errorHandler);
app.use(cliente_routes_1.clienteRoutes);
app.use(producto_routes_1.productoRoutes);
app.use(users_routes_1.usersRoutes);
app.use(categoria_routes_1.categoriaRoutes);
app.listen(3000, () => {
    console.log("tu servidor esta corriendo en el puerto 3000");
});
