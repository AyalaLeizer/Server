import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
