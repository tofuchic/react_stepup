import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../../../providers/SettingsProvider";

export const Page2 = () => {
  const context = useContext(SettingsContext);
  console.log(context);
  return (
    <div>
      <h1>Page2です</h1>
      <Link to={`page2/${context.count}`}>UrlParameter</Link>
      <br />
      <Link to={`page2/${context.count}?name=${context.text}`}>
        QueryParameter
      </Link>
    </div>
  );
};
