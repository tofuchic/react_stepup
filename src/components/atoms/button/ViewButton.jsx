import { memo } from "react";

export const ViewButton = memo((props) => {
  const { viewText, onClickViewText } = props;

  const data = [...Array(10).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {viewText ? (
        <button onClick={onClickViewText}>非表示</button>
      ) : (
        <button onClick={onClickViewText}>表示</button>
      )}
    </>
  );
});
