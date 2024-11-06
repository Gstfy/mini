import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import WebApp from "@twa-dev/sdk";

WebApp.ready();
WebApp.expand();
WebApp.setBackgroundColor('#242424');
WebApp.setHeaderColor('#242424');
WebApp.enableClosingConfirmation;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
