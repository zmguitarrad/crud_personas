import { Router } from 'express';
const router = Router();

import { getUserbyId, getUsers,createUser,deleteUser } from '../controllers/index.controller';

router.get('/users',getUsers);
router.get('/users/:id',getUserbyId);
router.post('/users',createUser);
//router.get('/users',getUsers);
router.delete('/users/:id',deleteUser);

export default router;