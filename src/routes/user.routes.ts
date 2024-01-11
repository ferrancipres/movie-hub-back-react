import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByEmail, updateUser, getUserById } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById);
userRoutes.post('/', createUser);
userRoutes.patch('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);

export default userRoutes;