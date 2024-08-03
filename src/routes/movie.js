import express from 'express';
import { getAllMovies, addMovie, editMovie, deleteMovie, getMovieById } from '../controllers/movie.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getAllMovies);
router.post('/', auth, addMovie);
router.put('/:id', auth, editMovie);
router.delete('/:id', auth, deleteMovie);
router.get('/:id', auth, getMovieById);

export default router;
