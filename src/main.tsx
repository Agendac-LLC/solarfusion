import { createRoot } from "react-dom/client";
// Latin-only subsets — no Cyrillic/Greek/Vietnamese needed for a French site
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
