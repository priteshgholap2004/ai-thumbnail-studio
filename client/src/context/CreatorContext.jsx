import { createContext, useContext, useState } from "react";
import { generateTitles } from "../services/creator.service";

const CreatorContext = createContext();

export const CreatorProvider = ({ children }) => {

  const [titles, setTitles] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const getTitles = async (prompt) => {

    try {

      setLoading(true);

      setError(null);

      const res = await generateTitles(prompt);

      setTitles(res.data);

      return res.data;

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Failed to generate titles."
      );

      throw err;

    } finally {

      setLoading(false);

    }

  };

  return (

    <CreatorContext.Provider
      value={{
        titles,
        loading,
        error,
        getTitles,
      }}
    >

      {children}

    </CreatorContext.Provider>

  );

};

export const useCreator = () =>
  useContext(CreatorContext);