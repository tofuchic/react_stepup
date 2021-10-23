import { useCallback, useState } from "react";
import { ChildArea } from "../organisms/ChildArea";
import { CssModules } from "../CssModules";
import { Emotion } from "../Emotion";
import { InlineStyle } from "../InlineStyle";
import { StyledComponents } from "../StyledComponents";
import { StyledJsx } from "../StyledJsx";
import { ViewButton } from "../atoms/button/ViewButton";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [viewText, setViewText] = useState(false);

  const onClickCountUp = () => setCount(count + 1);
  const onChangeText = (e) => setText(e.target.value);
  const onClickViewText = useCallback(() => setViewText(!viewText), [viewText]);

  return (
    <div>
      <h1>Homeです</h1>
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
  );
};
