import api from "../api/axios";

// Generate Titles
export const generateTitles = async (prompt) => {
  const response = await api.post("/creator/titles", {
    prompt,
  });

  return response.data;
};

// Generate Description
export const generateDescription = async (prompt) => {
  const response = await api.post("/creator/description", {
    prompt,
  });

  return response.data;
};

// Generate Tags
export const generateTags = async (prompt) => {
  const response = await api.post("/creator/tags", {
    prompt,
  });

  return response.data;
};