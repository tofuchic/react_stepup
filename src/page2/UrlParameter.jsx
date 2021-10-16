import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h2>UrlParameterです</h2>
      <p>ID: {id}</p>
      <p>Query: {query.get("name")}</p>
    </div>
  );
};
