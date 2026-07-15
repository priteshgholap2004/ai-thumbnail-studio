import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_API_KEY);

// export const generateThumbnailAI = async (enhancedPrompt) => {
//   const image = await client.textToImage({
//     provider: "hf-inference",
//     model: "black-forest-labs/FLUX.1-schnell",
//     inputs: enhancedPrompt,
//   });

//     const arrayBuffer = await image.arrayBuffer();

//     const buffer = Buffer.from(arrayBuffer);

//     return buffer;
// };

export const generateThumbnailAI = async (enhancedPrompt) => {
  try {
    const image = await client.textToImage({
      provider: "hf-inference",
      model: "black-forest-labs/FLUX.1-schnell",
      inputs: enhancedPrompt,
    });

    const arrayBuffer = await image.arrayBuffer();

    return Buffer.from(arrayBuffer);

  } catch (error) {
    console.log("HF ERROR:");
    console.log(error);

    throw error;
  }
};