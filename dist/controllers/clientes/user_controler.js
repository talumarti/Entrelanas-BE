"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const generateToken = (req, response) => {
    const userName = req.body.username;
    const user = { name: userName };
    const accessToken = jsonwebtoken_1.default.sign(user, `${process.env.CLAVE_JWT}`, { expiresIn: '1h' });
    return response.status(200).json({ accessToken });
};
exports.generateToken = generateToken;
/*export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(!token) {
        return res.status(401).json({error: 'Auth Token Not Found'});
    }
    jwt.verify(token, `${process.env.CLAVE_JWT}`, (err, user) => {
        if(err) {
            return res.status(403).json({error: 'Invalid Token'});
        }
    });
    next();
};*/ 
