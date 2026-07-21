import { InferenceClient } from "@huggingface/inference";
import { generatePollinationsImage } from "./pollinations.service.js";

const client = new InferenceClient(process.env.HF_API_KEY);

const MODELS = [
  "black-forest-labs/FLUX.1-dev",
  "stabilityai/stable-diffusion-3.5-large",
  "stabilityai/stable-diffusion-xl-base-1.0",
];

export const generateThumbnailAI = async (enhancedPrompt) => {

  let lastError = null;

  for (const model of MODELS) {

    try {

      const image = await client.textToImage({
        model,
        inputs: enhancedPrompt,
      });

      const arrayBuffer = await image.arrayBuffer();


      return Buffer.from(arrayBuffer);

    } catch (err) {

      lastError = err;

    }

  }

  try {

    return await generatePollinationsImage(enhancedPrompt);

  } catch (pollinationsError) {

    throw pollinationsError;

  }

};