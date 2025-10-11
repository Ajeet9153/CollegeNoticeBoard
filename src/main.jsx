import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StoreContextProvider from "./context/StoreContext.jsx";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </StrictMode>
);
