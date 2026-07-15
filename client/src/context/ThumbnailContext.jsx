import { createContext, useContext, useState } from "react";
import {
  generateThumbnail,
  getThumbnailHistory,
  deleteThumbnail,
} from "../services/thumbnail.service";

const ThumbnailContext = createContext();

export const ThumbnailProvider = ({ children }) => {

  // Preview
  const [thumbnail, setThumbnail] = useState(null);

  // History
  const [history, setHistory] = useState([]);

  // Shared Prompt Form State
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Modern Creator");
  const [aspectRatio, setAspectRatio] = useState("16:9");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async () => {
    try {

      setLoading(true);
      setError(null);

      const res = await generateThumbnail({
        prompt,
        style,
        aspectRatio,
      });

      // Preview updates immediately
      setThumbnail(res.data);

      // History updates instantly
      setHistory(prev => [res.data, ...prev]);

      return res;

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Generation failed"
      );

      throw err;

    } finally {

      setLoading(false);

    }
  };

  const fetchHistory = async () => {

    try {

      const res = await getThumbnailHistory();

      setHistory(res.data);

    } catch (err) {

      console.error(err);

    }

  };

  const removeThumbnail = async (id) => {

    await deleteThumbnail(id);

    setHistory(prev =>
      prev.filter(item => item._id !== id)
    );

    if (thumbnail?._id === id) {
      setThumbnail(null);
    }

  };

  return (

    <ThumbnailContext.Provider
      value={{

        thumbnail,
        setThumbnail,

        history,
        setHistory,

        prompt,
        setPrompt,

        style,
        setStyle,

        aspectRatio,
        setAspectRatio,

        loading,
        error,

        generate,
        fetchHistory,
        removeThumbnail,

      }}
    >

      {children}

    </ThumbnailContext.Provider>

  );

};

export const useThumbnail = () =>
  useContext(ThumbnailContext);