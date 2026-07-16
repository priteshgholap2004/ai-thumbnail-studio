import api from "../api/axios";

// Generate Titles
export const generateTitles = async (prompt) => {

  const response = await api.post("/creator/titles", {
    prompt,
  });

  return response.data;

};