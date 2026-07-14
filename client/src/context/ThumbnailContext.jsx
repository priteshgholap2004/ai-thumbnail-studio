import { createContext, useContext, useState } from "react";

const ThumbnailContext = createContext();

export const ThumbnailProvider = ({ children }) => {

    const [thumbnail, setThumbnail] = useState(null);

    return (
        <ThumbnailContext.Provider
            value={{
                thumbnail,
                setThumbnail,
            }}
        >
            {children}
        </ThumbnailContext.Provider>
    );
};

export const useThumbnail = () => useContext(ThumbnailContext);