import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./route";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import  "../src/main.css";


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
