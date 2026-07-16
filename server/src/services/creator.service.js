import { titlePrompt } from "../prompts/creator.prompts.js";
import { generateTitles } from "./gemini.service.js";

export const generateTitlesService = async (prompt) => {

  const instruction = titlePrompt(prompt);

  const result = await generateTitles(instruction);

  return result
    .split("\n")
    .map(line => line.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

};