import {
  generateTitlesService,
  generateDescriptionService,
  generateTagsService,
  generateEnhancedPromptService,
} from "../services/creator.service.js";

export const generateTitles = async (req, res, next) => {

  try {

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    const titles = await generateTitlesService(prompt);

    res.status(200).json({
      success: true,
      data: titles,
    });

  } catch (err) {

    next(err);

  }

};

export const generateDescription = async (req, res, next) => {

  try {

    const { prompt } = req.body;

    if (!prompt) {

      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });

    }

    const description =
      await generateDescriptionService(prompt);

    res.status(200).json({
      success: true,
      data: description,
    });

  } catch (err) {

    next(err);

  }

};

export const generateTags = async (req, res, next) => {

  try {

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    const tags = await generateTagsService(prompt);

    res.status(200).json({
      success: true,
      data: tags,
    });

  } catch (err) {

    next(err);

  }

};

export const generateEnhancedPrompt = async (
  req,
  res,
  next
) => {

  try {

    const {
      prompt,
      style,
      aspectRatio,
    } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    const enhanced =
      await generateEnhancedPromptService(
        prompt,
        style,
        aspectRatio
      );

    res.status(200).json({
      success: true,
      data: enhanced,
    });

  } catch (err) {

    next(err);

  }

};