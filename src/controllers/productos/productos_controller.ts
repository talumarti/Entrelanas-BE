import { QueryResult } from "pg";
import { Request, Response } from "express";
import pool from "../../database/conexion";

export const listProductos= async (req: Request, res:Response): Promise<Response> =>{
    try {
        const respuesta:QueryResult=await pool.query('select * from productos;');
        return res.json(respuesta.rows);
    } catch (error) {
       console.log(error);
       return res.status(500).json('Ocurrió un error al consultar los productos');
    }
};

export const getProductosById = async (req: Request, res: Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM productos WHERE producto_id = $1',[id]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
       return res.status(500).json('Ocurrió un error al consultar los productos');
    }
}

export const createProductos = async (req: Request, res: Response): Promise<Response> => {
    const {productoId, productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id} = req.body;

    if (productoId !== null){
        try {
            await pool.query('INSERT INTO productos (producto_id, nombre, precio, categoria_id, observacion, proveedor_id) values ($1, $2, $3, $4, $5, $6)',
                [productoId, productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id]
            );
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
        } catch (error) {
            console.error(error);
            return res.status(500).json('Ocurrió un error al consultar los productos');
        }
    } else {
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
};

export const deleteProductos = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);

    try {
        await pool.query('DELETE FROM productos WHERE producto_id = $1', [id]);
        return res.status(200).json(`El producto ${id} se eliminó exitosamente.`);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }
};

export const updateProductos = async (req: Request, res: Response): Promise<Response> => {
    const producto_Id = parseInt(req.params.id);
    const {productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id} = req.body;/*lo lee postman en el body*/
    try {
        await pool.query('UPDATE productos SET nombre = $1, precio = $2, categoria_id = $3, observacion = $4, proveedor_id = $5 WHERE producto_id = $6', /*aca van los nombres como aparecen en dbeaver*/
            [productoNombre, productoPrecio, productoCategoria_id, productoObservacion, productoProveedor_id, producto_Id]/*lo lee la tabla dbeaver*/
        );

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
    } catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los productos');
    }

};