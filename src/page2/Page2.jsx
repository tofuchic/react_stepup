import { Link } from "react-router-dom";

export const Page2 = (props) => {
  const { count } = props;
  return (
    <div>
      <h1>Page2です</h1>
      <Link to={`page2/${count}`}>UrlParameter</Link>
    </div>
  );
};
