import asyncHandler from "../utils/asyncHandler.js";
import { enhancePrompt } from "../services/gemini.service.js";
import { generateThumbnailAI } from "../services/thumbnail.service.js";
import { uploadImage } from "../services/cloudinary.service.js";
import Thumbnail from "../models/thumbnail.model.js";

export const generateThumbnail = asyncHandler(async (req, res) => {

  const { prompt, style, aspectRatio } = req.body;

  if (!prompt?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Prompt is required",
    });
  }

  const enhancedPrompt = await enhancePrompt(
    prompt,
    style,
    aspectRatio
  );

  const imageBuffer = await generateThumbnailAI(
  enhancedPrompt
  );


  const uploadedImage = await uploadImage(imageBuffer);


  const thumbnail = await Thumbnail.create({
    user: req.user.userId,
    originalPrompt: prompt,
    enhancedPrompt,
    imageUrl: uploadedImage.secure_url,
    publicId: uploadedImage.public_id,
    style,
    aspectRatio,
  });

  res.status(200).json({
    success: true,
    message: "Thumbnail generated successfully",
    data: thumbnail,
  });

});