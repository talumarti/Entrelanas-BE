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
exports.listClientes = void 0;
const conexion_1 = __importDefault(require("../../database/conexion"));
const listClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield conexion_1.default.query('select * from clientes;');
        return res.json(respuesta.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
});
exports.listClientes = listClientes;
