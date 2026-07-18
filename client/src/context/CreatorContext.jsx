import { createContext, useContext, useState } from "react";
import {
  generateTitles,
  generateDescription,
  generateTags,
} from "../services/creator.service";

const CreatorContext = createContext();

export const CreatorProvider = ({ children }) => {

  const [titles, setTitles] = useState([]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const [titlesLoading, setTitlesLoading] = useState(false);

  const [descriptionLoading, setDescriptionLoading] = useState(false);

  const [tagsLoading, setTagsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ==========================
  // Generate Titles
  // ==========================
  const getTitles = async (prompt) => {

    try {

      setTitlesLoading(true);
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

      setTitlesLoading(false);

    }

  };

  // ==========================
  // Generate Description
  // ==========================
  const getDescription = async (prompt) => {

    try {

      setDescriptionLoading(true);
      setError(null);

      const res = await generateDescription(prompt);

      setDescription(res.data);

      return res.data;

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Failed to generate description."
      );

      throw err;

    } finally {

      setDescriptionLoading(false);

    }

  };

  // ==========================
  // Generate Tags
  // ==========================
  const getTags = async (prompt) => {

    try {

      setTagsLoading(true);
      setError(null);

      const res = await generateTags(prompt);

      setTags(res.data);

      return res.data;

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Failed to generate tags."
      );

      throw err;

    } finally {

      setTagsLoading(false);

    }

  };

  return (

    <CreatorContext.Provider
      value={{

        titles,
        description,
        tags,

        titlesLoading,
        descriptionLoading,
        tagsLoading,

        error,

        getTitles,
        getDescription,
        getTags,

      }}
    >

      {children}

    </CreatorContext.Provider>

  );

};

export const useCreator = () => useContext(CreatorContext);