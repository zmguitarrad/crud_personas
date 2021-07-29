"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserbyId = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM seguridades.USUARIO');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsers = getUsers;
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT *FROM seguridades.USUARIO WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getUserbyId = getUserbyId;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario, cedula, nombre, apellido, correo, clave } = req.body;
    const response = yield database_1.pool.query('INSERT INTO seguridades.USUARIO (id_usuario,cedula, nombre,apellido, correo, clave) VALUES ($1,$2,$3,$4,$5,$6)', [id_usuario, cedula, nombre, apellido, correo, clave]);
    return res.json({
        message: 'User created Successfuly',
        body: {
            USUARIO: {
                id_usuario,
                cedula,
                nombre, apellido,
                correo,
                clave
            }
        }
    });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { id_usuario, cedula, nombre, apellido, correo, clave } = req.body;
    yield database_1.pool.query('UPDATE seguridades.USUARIO SET id_usuario= $1, cedula = $2, nombre =$3, apellido $4, correo =$5, clave =$6', [id_usuario, cedula, nombre, apellido, correo, clave]);
    return res.json(`USUARIO ${1} Updated Successfuly`);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield database_1.pool.query('DELETE FROM seguridades.USUARIO WHERE id =$1', [id]);
    return res.json(`USUARIO ${1} deleted Successfuly`);
});
exports.deleteUser = deleteUser;
