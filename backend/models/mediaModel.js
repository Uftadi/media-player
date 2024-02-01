import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
	video: { type: Array, default: [] },
	songs: { type: Array, default: [] },
});

export default mongoose.model("Song", mediaSchema);
