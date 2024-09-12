import { Router } from "express";
import { createUser, generateToken } from "../controllers/users/users_controller";

export const usersRoutes = Router();

require('dotenv').config();

usersRoutes.post('/api/login', generateToken);
usersRoutes.post('/user/register', createUser);

/*
usersRoutes.get('/list/userss', listUsers);
usersRoutes.post('/createuserss', createUsers);
usersRoutes.delete('/deleteuserss/:id', deleteUsers);
usersRoutes.put('/updateuserss/:id', updateUsers);*/
