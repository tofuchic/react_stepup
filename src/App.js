import "./styles.css";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  console.log("rendering");

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
