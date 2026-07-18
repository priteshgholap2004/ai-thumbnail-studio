import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const enhancePrompt = async (
  prompt,
  style,
  aspectRatio
) => {

  const instruction = `
    You are an expert YouTube thumbnail prompt engineer.

    Your job is to convert the user's idea into an AI image generation prompt.

    Requirements:

    - Preserve the original meaning.
    - Create a premium YouTube thumbnail.
    - Ultra realistic.
    - Cinematic lighting.
    - Vibrant colors.
    - High contrast.
    - Sharp focus.
    - Professional composition.
    - HDR quality.
    - Extremely detailed.
    - Eye-catching.
    - Viral click-worthy style.
    - Clear foreground and background separation.
    - Subject fills most of the frame.
    - Dramatic facial expression when applicable.
    - Large empty area for thumbnail text.

    IMPORTANT:

    The composition MUST strictly follow this aspect ratio:

    ${aspectRatio}

    If aspectRatio is 16:9, compose the image as a wide cinematic YouTube thumbnail.
    Do NOT create a square image.
    Do NOT crop important subjects.

    Typography:
    If appropriate, include 3-4 large bold words.
    The text must be huge, readable, high contrast and positioned professionally.

    Thumbnail Style:
    ${style}

    User Idea:
    ${prompt}

    Return ONLY the final image generation prompt.
    `;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: instruction,
  });

  return response.text.trim();
};

export const generateTitles = async (instruction) => {

  const response = await ai.models.generateContent({

    model: "gemini-flash-latest",

    contents: instruction,

  });

  return response.text.trim();

};