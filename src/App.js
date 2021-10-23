import "./styles.css";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";

export default function App() {
  console.log("rendering");

  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
}
