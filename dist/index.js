"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_routes_1 = require("./routes/cliente_routes");
const conexion_1 = __importDefault(require("./database/conexion"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(cliente_routes_1.clienteRoutes);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'select * from clientes;';
    const response = yield conexion_1.default.query(query);
    console.log(response);
    res.send('hola cibermundo soy Tatiana');
}));
app.listen(3000, () => {
    console.log("tu servidor esta corriendo en el puerto 3000");
});
