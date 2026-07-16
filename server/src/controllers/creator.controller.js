import { generateTitlesService } from "../services/creator.service.js";

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