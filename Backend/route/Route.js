import express from 'express';
import { getNotes,
        getNoteById,
        createNote,
        updateNote,
        deleteNote } from '../controller/NoteController.js';

import { getUsers,
        createUser,
        updateUser,
        deleteUser,
        getUserById,
        loginHandler,
        logout
} from "../controller/UserController.js";
import { refreshToken } from "../controller/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";


const router = express.Router();

router.get('/token', refreshToken);
router.post('/login', loginHandler);
router.delete('/logout', logout);

router.post("/register", createUser); //tambah user
router.get("/users", getUsers);
router.get("/users/:id", verifyToken,getUserById);
router.put("/edit-user/:id", verifyToken,updateUser);
router.delete("/delete-user/:id", deleteUser);

router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;