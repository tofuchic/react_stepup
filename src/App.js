import "./styles.css";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { SettingsProvider } from "./providers/SettingsProvider";

export default function App() {
  console.log("rendering");

  return (
    <SettingsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SettingsProvider>
  );
}
