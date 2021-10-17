import styled from "styled-components";

export const PrimaryInput = (props) => {
  const { placeholder = "" } = props;
  return <SInput placeholder={placeholder} />;
};

const SInput = styled.input`
  border: solid 1px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`;
