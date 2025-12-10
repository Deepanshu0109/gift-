import mongoose from "mongoose";

const ReasonSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

export default mongoose.model("Reason", ReasonSchema);
