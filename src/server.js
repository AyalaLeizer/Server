import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';
import userRoutes from './routes/user.js';
import movieRoutes from './routes/movie.js';
import memberRoutes from './routes/member.js';
import subscriptionRoutes from './routes/subscription.js';
dotenv.config();

const PORT = process.env.PORT || 4005;
const app = express();
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGOOSE_URI)
  .then(() => console.log("mongoose connected"))
  .catch((error) => console.log(error));
