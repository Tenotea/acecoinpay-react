import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css/normalize.css";
import "./index.scss";
import CheckoutTemplate from "./templates/checkout-template/CheckoutTemplate.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CheckoutTemplate />
  </React.StrictMode>
);
