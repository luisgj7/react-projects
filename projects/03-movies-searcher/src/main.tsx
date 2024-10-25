import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FilterProvider } from "./contexts/filters.context.tsx";

createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
