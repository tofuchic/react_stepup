import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  return (
    <div>
      <h2>Page1DetailAです</h2>
      {state}
    </div>
  );
};
