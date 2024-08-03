import Movie from '../models/movie.js';

export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ message: "Movies fetched successfully", data: movies });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addMovie = async (req, res) => {
    const { title, genres, image, year, userId } = req.body;
    try {
        const movie = await Movie.create({ title, genres, image, year, userId });
        res.status(201).json({ message: "Movie added successfully", movie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const editMovie = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const movie = await Movie.findByIdAndUpdate(id, updates, { new: true });
        if (!movie) return res.status(404).json({ message: "Movie not found" });
        res.status(200).json({ message: "Movie updated successfully", movie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) return res.status(404).json({ message: "Movie not found" });
        res.status(200).json({ message: "Movie deleted successfully", movie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        if (!movie) return res.status(404).json({ message: "Movie not found" });
        res.status(200).json({ message: "Movie fetched successfully", movie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
