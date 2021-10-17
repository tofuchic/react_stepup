import "./styles.css";

import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  console.log("rendering");

  return (
    <BrowserRouter>
      <div className="App">
        <h1>React/TypeScript勉強用</h1>
        <a href="https://www.udemy.com/course/react_stepup">参考元</a>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/atomicDesign">AtomicDesign</Link>
        <br />
        <Link to="/aaaaaaaaaaaaa">404</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
