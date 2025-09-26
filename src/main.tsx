import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./route";
import { BrowserRouter } from "react-router-dom";
import './main.css';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
