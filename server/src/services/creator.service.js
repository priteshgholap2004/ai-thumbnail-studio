import {
  titlePrompt,
  descriptionPrompt,
  tagsPrompt,
  enhancePromptPrompt,
} from "../prompts/creator.prompts.js";
import { generateTitles } from "./gemini.service.js";

export const generateTitlesService = async (prompt) => {

  const instruction = titlePrompt(prompt);

  const result = await generateTitles(instruction);

  return result
    .split("\n")
    .map(line => line.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

};

export const generateDescriptionService = async (prompt) => {

  const instruction = descriptionPrompt(prompt);

  const result = await generateTitles(instruction);

  return result.trim();

};

export const generateTagsService = async (prompt) => {

  const instruction = tagsPrompt(prompt);

  const result = await generateTitles(instruction);

  return result
  .split(",")
  .map((tag) => tag.trim())
  .filter(Boolean);

};

export const generateEnhancedPromptService = async (
  prompt,
  style,
  aspectRatio
) => {

  const instruction = enhancePromptPrompt(
    prompt,
    style,
    aspectRatio
  );

  const result = await generateTitles(instruction);

  return result.trim();

};