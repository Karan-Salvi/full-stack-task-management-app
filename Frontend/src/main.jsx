import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import FoodSwiftStore from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={FoodSwiftStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
