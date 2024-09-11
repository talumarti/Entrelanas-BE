import { QueryResult } from "pg";
import { Request, Response } from "express";
import pool from "../../database/conexion";

export const listClientes= async (req: Request, res:Response): Promise<Response> =>{
    try {
        const respuesta:QueryResult=await pool.query('select * from clientes;');
        return res.json(respuesta.rows);
    } catch (error) {
       console.log(error);
       return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
};

export const getClientesById = async (req: Request, res: Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM clientes WHERE cliente_id = $1',[id]);
        return res.json(response.rows);
    } catch (error) {
        console.log(error);
       return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
}

export const createClientes = async (req: Request, res: Response): Promise<Response> => {
    const {clienteId, clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail} = req.body;

    if (clienteId !== null  && clienteTelefono !== null && clienteEmail !== null){
        try {
            await pool.query('INSERT INTO clientes (cliente_id, nombres, apellidos, direccion, telefono, email) values ($1, $2, $3, $4, $5, $6)',
                [clienteId, clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail]
            );
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
        } catch (error) {
            console.error(error);
            return res.status(500).json('Ocurrió un error al consultar los clientes');
        }
    } else {
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
};

export const deleteClientes = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);

    try {
        await pool.query('DELETE FROM clientes WHERE cliente_id = $1', [id]);
        return res.status(200).json(`El cliente ${id} se eliminó exitosamente.`);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }
};

export const updateClientes = async (req: Request, res: Response): Promise<Response> => {
    const clienteId = parseInt(req.params.id);
    const {clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail} = req.body;/*lo lee postman en el body*/
    try {
        await pool.query('UPDATE clientes SET nombres = $1, apellidos = $2, direccion = $3, telefono = $4, email = $5 WHERE cliente_id = $6', /*aca van los nombres para postman*/
            [clienteNombres, clienteApellidos, clienteDireccion, clienteTelefono, clienteEmail, clienteId]/*lo lee la tabla dbeaver*/
        );

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
    } catch (error) {
        console.error(error);
        return res.status(500).json('Ocurrió un error al consultar los clientes');
    }

};