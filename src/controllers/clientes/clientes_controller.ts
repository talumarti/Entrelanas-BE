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
}