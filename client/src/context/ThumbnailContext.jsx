import { createContext, useContext, useState, useCallback, } from "react";
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

  const [thumbnailLoading, setThumbnailLoading] = useState(false);

  const [error, setError] = useState(null);

  const [editingThumbnail, setEditingThumbnail] = useState(null);

  const generate = async (override = null) => {
    try {
      setThumbnailLoading(true);
      setError(null);

      const payload = override ?? {
        prompt,
        style,
        aspectRatio,
      };

      const res = await generateThumbnail(payload);
      setThumbnail(res.data);

      setHistory((prev) => [
        res.data,
        ...prev,
      ]);

      setEditingThumbnail(null);
      return res;
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Failed to generate thumbnail."
      );
      throw err;
    } finally {
      setThumbnailLoading(false);
    }
  };

  const regenerate = async (item) => {

    return await generate({
      prompt: item.originalPrompt,
      style: item.style,
      aspectRatio: item.aspectRatio,
    });

  };

  const fetchHistory = useCallback(async () => {
    try {
      const res = await getThumbnailHistory();
      setHistory(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

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

        editingThumbnail,
        setEditingThumbnail,

        prompt,
        setPrompt,

        style,
        setStyle,

        aspectRatio,
        setAspectRatio,

        thumbnailLoading,
        error,

        generate,
        regenerate,

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