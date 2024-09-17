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
exports.updateCategoria = exports.deleteCategoria = exports.createCategoria = exports.getCategoriaById = exports.listCategoria = void 0;
const conexion_1 = __importDefault(require("../../database/conexion"));
const listCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield conexion_1.default.query('SELECT * FROM categorias;');
        return res.json(respuesta.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
});
exports.listCategoria = listCategoria;
const getCategoriaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield conexion_1.default.query('SELECT * FROM categorias WHERE categoria_id = $1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
});
exports.getCategoriaById = getCategoriaById;
const createCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoriaId, categoriaDescripcion } = req.body;
    if (categoriaId !== null && categoriaDescripcion !== null) {
        try {
            yield conexion_1.default.query('INSERT INTO categorias (categoria_id, descripcion) values ($1, $2)', [categoriaId, categoriaDescripcion]);
            return res.status(201).json({
                message: 'categoria creada con exito',
                categoria: {
                    categoriaId,
                    categoriaDescripcion,
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Ocurrió un error al consultar las categorias');
        }
    }
    else {
        return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
});
exports.createCategoria = createCategoria;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield conexion_1.default.query('DELETE FROM categorias WHERE categoria_id = $1', [id]);
        return res.status(200).json(`El categoria ${id} se eliminó exitosamente.`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los categorias');
    }
});
exports.deleteCategoria = deleteCategoria;
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaId = parseInt(req.params.id);
    const { categoriaDescripcion } = req.body; /*lo lee postman en el body*/
    try {
        yield conexion_1.default.query('UPDATE categorias SET descripcion = $1 WHERE categoria_id = $2', /*aca van los nombres como aparece en la tabla dbeaver*/ [categoriaDescripcion, categoriaId]);
        return res.json({
            message: 'categoria actualizado con éxito.',
            categoria: {
                categoriaId,
                categoriaDescripcion,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
});
exports.updateCategoria = updateCategoria;
