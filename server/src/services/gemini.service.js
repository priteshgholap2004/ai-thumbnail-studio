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

Rewrite the following prompt for an AI image generation model.

Requirements:
- Make it highly detailed.
- Keep the original meaning.
- Add cinematic lighting.
- Add vibrant colors.
- Add professional composition.
- Add ultra realistic details.
- Add high contrast.
- Mention the aspect ratio.
Include large, bold, readable thumbnail text when appropriate.
Use 3–4 impactful words.
Make typography professional and highly visible.

User Prompt:
${prompt}

Style:
${style}

Aspect Ratio:
${aspectRatio}

Return ONLY the enhanced prompt.
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