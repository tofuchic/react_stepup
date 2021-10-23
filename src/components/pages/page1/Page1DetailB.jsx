import { useHistory } from "react-router-dom";

export const Page1DetailB = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>Page1DetailBです</h2>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
