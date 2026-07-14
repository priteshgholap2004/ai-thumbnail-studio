import api from "../api/axios";

//register user
export const registerUser = async (userData) => {
    const response = await api.post("/users/register",userData);
    return response.data;
};

//Login user
export const loginUser = async (userData) => {
    const response = await api.post("/users/login", userData);
    return response.data;
};

// Logout User
export const logoutUser = async () => {
  const response = await api.post("/users/logout");
  return response.data;
};

// Get Logged-in User
export const getProfile = async () => {
  try {
    const response = await api.get("/users/profile");
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return null;
    }

    throw error;
  }
};