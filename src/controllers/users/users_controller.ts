import { Request, Response } from "express";
import jwt from "jsonwebtoken";

require('dotenv').config();/*para usar en archivo ambiente*/

export const generateToken = (req: Request, response:Response): Response => {
    const userName = req.body.username;
    const user = {name: userName};
    const accessToken = jwt.sign(user, `${process.env.CLAVE_JWT}`, {expiresIn: '1h'});
    return response.status(200).json({accessToken});
};

