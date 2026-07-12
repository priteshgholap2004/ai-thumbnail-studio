import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    originalPrompt: {
        type: String,
        required: true,
        trim: true,
    },

    enhancedPrompt: {
        type: String,
        required: true,
        trim: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    style: {
      type: String,
      default: "default",
    },

    aspectRatio: {
      type: String,
      default: "16:9",
    },
},
{
    timestamps: true,
}
);

const Thumbnail = mongoose.model("Thumbnail", thumbnailSchema);

export default Thumbnail;