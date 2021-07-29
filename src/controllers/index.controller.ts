import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';

export const getUsers =async(req:Request,res:Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM seguridades.USUARIO');
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error');    
    }  
}
export const getUserbyId = async(req:Request, res:Response): Promise<Response> =>{
    const id =parseInt(req.params.id)
    const response: QueryResult=await pool.query('SELECT *FROM seguridades.USUARIO WHERE id = $1',[id]);
    return res.json(response.rows);   
}

export const createUser = async(req:Request, res:Response): Promise<Response> =>{
    const { id_usuario,cedula, nombre,apellido, correo, clave}=req.body;
    const response: QueryResult = await pool.query(
        'INSERT INTO seguridades.USUARIO (id_usuario,cedula, nombre,apellido, correo, clave) VALUES ($1,$2,$3,$4,$5,$6)',
        [id_usuario,cedula, nombre,apellido, correo, clave]);
   return res.json({
        message: 'User created Successfuly',
        body: {
            USUARIO:{
                id_usuario,
                cedula, 
                nombre,apellido, 
                correo, 
                clave
            }
        }
    })      
}

export const updateUser = async(req:Request, res:Response): Promise<Response> =>{
       const id =parseInt(req.params.id);
       const {id_usuario,cedula, nombre,apellido, correo, clave} =req.body;

       await pool.query('UPDATE seguridades.USUARIO SET id_usuario= $1, cedula = $2, nombre =$3, apellido $4, correo =$5, clave =$6',
       [id_usuario,cedula, nombre,apellido, correo, clave]);
       return res.json(`USUARIO ${1} Updated Successfuly`);
}

export const deleteUser = async(req:Request, res:Response): Promise<Response> =>{
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM seguridades.USUARIO WHERE id =$1',[id]);
    return res.json(`USUARIO ${1} deleted Successfuly`);
        
}
