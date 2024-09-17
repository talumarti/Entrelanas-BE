import { QueryResult } from "pg";
import { Request, Response } from "express";
import pool from "../../database/conexion";

export const listCategoria= async (req: Request, res:Response): Promise<Response> =>{
    try {
        const respuesta:QueryResult=await pool.query('SELECT * FROM categorias;');
        return res.json(respuesta.rows);
    } catch (error) {
       console.log(error);
       return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
};

export const getCategoriaById = async (req: Request, res: Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM categorias WHERE categoria_id = $1',[id]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
       return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
}

export const createCategoria = async (req: Request, res: Response): Promise<Response> => {
    const {categoriaId, categoriaDescripcion} = req.body;

    if (categoriaId !== null  && categoriaDescripcion !== null){
        try {
            await pool.query('INSERT INTO categorias (categoria_id, descripcion) values ($1, $2)',
                [categoriaId, categoriaDescripcion]
            );
            return res.status(201).json({
                message: 'categoria creada con exito',
                categoria: {
                    categoriaId,
                    categoriaDescripcion,
                    }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json('Ocurrió un error al consultar las categorias');
        }
    } else {
        return res.status(500).json('Ocurrió un error al consultar las categorias');
    }
};

export const deleteCategoria = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    try {
        await pool.query('DELETE FROM categorias WHERE categoria_id = $1', [id]);
        return res.status(200).json(`El categoria ${id} se eliminó exitosamente.`);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los categorias');
    }
};

export const updateCategoria = async (req: Request, res: Response): Promise<Response> => {
    const categoriaId = parseInt(req.params.id);
    const {categoriaDescripcion} = req.body;/*lo lee postman en el body*/
    try {
        await pool.query('UPDATE categorias SET descripcion = $1 WHERE categoria_id = $2', /*aca van los nombres como aparece en la tabla dbeaver*/
            [categoriaDescripcion, categoriaId]
        );
        return res.json({
            message: 'categoria actualizado con éxito.',
            categoria: {
                categoriaId,
                categoriaDescripcion,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar las categorias');
    }

};