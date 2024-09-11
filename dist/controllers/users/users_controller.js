"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config(); /*para usar en archivo ambiente*/
const generateToken = (req, response) => {
    const userName = req.body.username;
    const user = { name: userName };
    const accessToken = jsonwebtoken_1.default.sign(user, `${process.env.CLAVE_JWT}`, { expiresIn: '1h' });
    return response.status(200).json({ accessToken });
};
exports.generateToken = generateToken;
