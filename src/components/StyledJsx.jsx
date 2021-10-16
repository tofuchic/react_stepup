export const StyledJsx = () => {
  return (
    <>
      <div className="div">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!!</button>
      </div>
      <style jsx="true">{`
        .div {
          border: solid 8px purple;
          border-radius: 24px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 8px;
          color: green;
        }

        .button {
          margin: 8px;
          background-color: lightgreen;
          border: none;
          padding: 8px;
          border-radius: 8px;
          // Styled JSXはCSS疑似要素を使うことが出来ない
          &:hover {
            background-color: lightblue;
            color: gray;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
