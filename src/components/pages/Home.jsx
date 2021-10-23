import { useCallback, useContext, useState } from "react";
import { ChildArea } from "../atoms/div/ChildArea";
import { CssModules } from "../CssModules";
import { Emotion } from "../Emotion";
import { InlineStyle } from "../InlineStyle";
import { StyledComponents } from "../StyledComponents";
import { StyledJsx } from "../StyledJsx";
import { ViewButton } from "../atoms/button/ViewButton";
import { SettingsContext } from "../../providers/SettingsProvider";

export const Home = () => {
  const context = useContext(SettingsContext);

  const [viewText, setViewText] = useState(false);

  const onClickCountUp = () => context.setCount(context.count + 1);
  const onChangeText = (e) => context.setText(e.target.value);
  const onClickViewText = useCallback(() => setViewText(!viewText), [viewText]);

  return (
    <div>
      <h1>Homeです</h1>
      <p>count={context.count}</p>
      <button onClick={onClickCountUp}>+1</button>
      <br />
      <br />
      <input onChange={onChangeText} />
      <br />
      <br />
      <ViewButton viewText={viewText} onClickViewText={onClickViewText} />
      <ChildArea viewText={viewText} text={context.text}></ChildArea>
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
