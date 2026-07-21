import axios from "axios";

const MODELS = [
  "flux",
  "klein",
  "sana",
  "zimage",
];

export const generatePollinationsImage = async (prompt) => {
  let lastError;

  for (const model of MODELS) {
    try {

      const url =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}` +
        `?model=${model}` +
        `&width=1280` +
        `&height=720` +
        `&nologo=true`;

      const response = await axios.get(url, {
        responseType: "arraybuffer",
        timeout: 120000,
      });


      return Buffer.from(response.data);
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
};