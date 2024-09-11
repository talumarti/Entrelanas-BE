"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users/users_controller");
exports.usersRoutes = (0, express_1.Router)();
require('dotenv').config();
exports.usersRoutes.post('/api/login', users_controller_1.generateToken);
/*
usersRoutes.get('/list/userss', listUsers);
usersRoutes.post('/createuserss', createUsers);
usersRoutes.delete('/deleteuserss/:id', deleteUsers);
usersRoutes.put('/updateuserss/:id', updateUsers);
*/ 
