import { Link } from "react-router-dom";

export const Page1 = (count) => {
  count = 100;
  const arr = [...Array(count).keys()];
  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};
