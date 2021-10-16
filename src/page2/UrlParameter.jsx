import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>UrlParameterです</h2>
      <p>ID: {id}</p>
    </div>
  );
};
