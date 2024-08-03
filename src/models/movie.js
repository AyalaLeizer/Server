import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    genres: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
