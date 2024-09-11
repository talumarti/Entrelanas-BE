import { Router } from "express";
import { createClientes, deleteClientes, listClientes, getClientesById, updateClientes } from "../controllers/clientes/clientes_controller";
import { generateToken } from "../controllers/users/users_controller";

export const usersRoutes = Router();

require('dotenv').config();

usersRoutes.post('/api/login', generateToken);


/*
usersRoutes.get('/list/userss', listUsers);
usersRoutes.post('/createuserss', createUsers);
usersRoutes.delete('/deleteuserss/:id', deleteUsers);
usersRoutes.put('/updateuserss/:id', updateUsers);
*/