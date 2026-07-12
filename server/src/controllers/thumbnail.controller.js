import asyncHandler from "../utils/asyncHandler.js";
import { enhancePrompt } from "../services/gemini.service.js";
import { generateThumbnailAI } from "../services/thumbnail.service.js";
import {
  uploadImage,
  deleteImage,
} from "../services/cloudinary.service.js";
import Thumbnail from "../models/Thumbnail.model.js";

// Generate Thumbnail
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

  res.status(201).json({
    success: true,
    message: "Thumbnail generated successfully",
    data: thumbnail,
  });
});

// Get All Thumbnails
export const getUserThumbnails = asyncHandler(async (req, res) => {
  const thumbnails = await Thumbnail.find({
    user: req.user.userId,
  }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    count: thumbnails.length,
    data: thumbnails,
  });
});

// Get Thumbnail By ID
export const getThumbnailById = asyncHandler(async (req, res) => {
  const thumbnail = await Thumbnail.findOne({
    _id: req.params.id,
    user: req.user.userId,
  });

  if (!thumbnail) {
    return res.status(404).json({
      success: false,
      message: "Thumbnail not found",
    });
  }

  res.status(200).json({
    success: true,
    data: thumbnail,
  });
});

// Delete Thumbnail
export const deleteThumbnail = asyncHandler(async (req, res) => {
  const thumbnail = await Thumbnail.findOne({
    _id: req.params.id,
    user: req.user.userId,
  });

  if (!thumbnail) {
    return res.status(404).json({
      success: false,
      message: "Thumbnail not found",
    });
  }

  await deleteImage(thumbnail.publicId);

  await thumbnail.deleteOne();

  res.status(200).json({
    success: true,
    message: "Thumbnail deleted successfully",
  });
});