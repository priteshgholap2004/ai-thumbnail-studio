import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/AuthContext";
import { ThumbnailProvider } from "./context/ThumbnailContext";

import { CreatorProvider } from "./context/CreatorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThumbnailProvider>
        <CreatorProvider>
          <App />
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#111827",
                  color: "#fff",
                  border: "1px solid #374151",
                },
              }}
            />
        </CreatorProvider>
      </ThumbnailProvider>
    </AuthProvider>
  </React.StrictMode>
);