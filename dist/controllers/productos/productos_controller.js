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
exports.updateProductos = exports.deleteProductos = exports.createProductos = exports.getProductosById = exports.listProductos = void 0;
const conexion_1 = __importDefault(require("../../database/conexion"));
const listProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield conexion_1.default.query('select * from productos;');
        return res.json(respuesta.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
});
exports.listProductos = listProductos;
const getProductosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield conexion_1.default.query('SELECT * FROM productos WHERE producto_id = $1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
});
exports.getProductosById = getProductosById;
const createProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productoId, productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id } = req.body;
    if (productoId !== null) {
        try {
            yield conexion_1.default.query('INSERT INTO productos (producto_id, nombre, precio, categoria_id, observacion, proveedor_id) values ($1, $2, $3, $4, $5, $6)', [productoId, productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id]);
            return res.status(201).json({
                message: 'producto creado con exito',
                producto: {
                    productoId,
                    productoNombre,
                    productoPrecio,
                    productoCategoria_id,
                    productoObservacion,
                    productoProveedor_id,
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Ocurrió un error al consultar los productos');
        }
    }
    else {
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
});
exports.createProductos = createProductos;
const deleteProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield conexion_1.default.query('DELETE FROM productos WHERE producto_id = $1', [id]);
        return res.status(200).json(`El producto ${id} se eliminó exitosamente.`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
});
exports.deleteProductos = deleteProductos;
const updateProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto_Id = parseInt(req.params.id);
    const { productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id } = req.body; /*lo lee postman en el body*/
    try {
        yield conexion_1.default.query('UPDATE productos SET nombre = $1, precio = $2, categoria_id = $3, observacion = $4, proveedor_id = $5 WHERE producto_id = $6', /*aca van los nombres como aparecen en dbeaver*/ [productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id, producto_Id] /*lo lee la tabla dbeaver*/);
        return res.json({
            message: 'producto actualizado con éxito.',
            producto: {
                producto_Id,
                productoNombre,
                productoPrecio,
                productoCategoria_id,
                productoObservacion,
                productoProveedor_id,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
});
exports.updateProductos = updateProductos;
