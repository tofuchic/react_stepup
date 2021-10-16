/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const divStyle = css`
    border: solid 8px purple;
    border-radius: 24px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css`
    margin: 8px;
    color: green;
  `;
  const buttonStyle = css`
    margin: 8px;
    background-color: lightgreen;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: lightblue;
      color: gray;
      cursor: pointer;
    }
  `;

  return (
    <div css={divStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button css={buttonStyle}>FIGHT!!!</button>
    </div>
  );
};
