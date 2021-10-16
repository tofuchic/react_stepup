import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { ViewButton } from "./ViewButton";
import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  console.log("rendering");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [viewText, setViewText] = useState(false);

  const onClickCountUp = () => setCount(count + 1);
  const onChangeText = (e) => setText(e.target.value);
  const onClickViewText = useCallback(() => setViewText(!viewText), [viewText]);

  return (
    <BrowserRouter>
      <Router />
      <div className="App">
        <h1>React/TypeScript勉強用</h1>
        <a href="https://www.udemy.com/course/react_stepup">参考元</a>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <p>count={count}</p>
        <button onClick={onClickCountUp}>+1</button>
        <br />
        <br />
        <input onChange={onChangeText} />
        <br />
        <br />
        <ViewButton viewText={viewText} onClickViewText={onClickViewText} />
        <ChildArea viewText={viewText} text={text}></ChildArea>
        <br />
        <br />
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </div>
    </BrowserRouter>
  );
}
