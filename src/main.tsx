import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
