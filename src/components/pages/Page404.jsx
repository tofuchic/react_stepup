import { Link, useHistory } from "react-router-dom";

export const Page404 = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">トップに戻る</Link>
      {history.location.key === undefined ? null : (
        <button onClick={onClickBack}>戻る</button>
      )}
    </div>
  );
};
