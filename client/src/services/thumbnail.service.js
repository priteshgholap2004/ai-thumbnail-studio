import api from "../api/axios";

// Generate Thumbnail
export const generateThumbnail = async (data) => {
    const response = await api.post("/thumbnails/generate", data);
    return response.data;
};

// Get User History
export const getThumbnailHistory = async () => {
    const response = await api.get("/thumbnails");
    return response.data;
};

// Delete Thumbnail
export const deleteThumbnail = async (id) => {
    const response = await api.delete(`/thumbnails/${id}`);
    return response.data;
};