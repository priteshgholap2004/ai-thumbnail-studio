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
- Do NOT add any text inside the image.

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