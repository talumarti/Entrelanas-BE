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
exports.updateClientes = exports.deleteClientes = exports.createClientes = exports.getClientesById = exports.listClientes = void 0;
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
const getClientesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield conexion_1.default.query('SELECT * FROM clientes WHERE cliente_id = $1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
});
exports.getClientesById = getClientesById;
const createClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clienteId, clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail } = req.body;
    if (clienteId !== null && clienteTelefono !== null && clienteEmail !== null) {
        try {
            yield conexion_1.default.query('INSERT INTO clientes (cliente_id, nombres, apellidos, direccion, telefono, email) values ($1, $2, $3, $4, $5, $6)', [clienteId, clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail]);
            return res.status(201).json({
                message: 'Cliente creado con exito',
                cliente: {
                    clienteId,
                    clienteNombres,
                    clienteApellidos,
                    clienteDireccion,
                    clienteTelefono,
                    clienteEmail,
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Ocurrió un error al consultar los clientes');
        }
    }
    else {
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
});
exports.createClientes = createClientes;
const deleteClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield conexion_1.default.query('DELETE FROM clientes WHERE cliente_id = $1', [id]);
        return res.status(200).json(`El cliente ${id} se eliminó exitosamente.`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
});
exports.deleteClientes = deleteClientes;
const updateClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteId = parseInt(req.params.id);
    const { clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail } = req.body; /*lo lee postman en el body*/
    try {
        yield conexion_1.default.query('UPDATE clientes SET nombres = $1, apellidos = $2, direccion = $3, telefono = $4, email = $5 WHERE cliente_id = $6', /*aca van los nombres para postman*/ [clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail, clienteId] /*lo lee la tabla dbeaver*/);
        return res.json({
            message: 'Cliente actualizado con éxito.',
            cliente: {
                clienteId,
                clienteNombres,
                clienteApellidos,
                clienteDireccion,
                clienteTelefono,
                clienteEmail,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
});
exports.updateClientes = updateClientes;
