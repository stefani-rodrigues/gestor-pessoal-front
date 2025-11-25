import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./route";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import  "../src/main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store ={store}>
    <Toaster
     position="top-right"
      reverseOrder={false}
    />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
