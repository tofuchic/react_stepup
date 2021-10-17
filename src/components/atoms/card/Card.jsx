import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SDiv>{children}</SDiv>;
};

const SDiv = styled.div`
  background-color: yellowgreen;
  box-shadow: black 1px 1px 4px 4px;
  border-radius: 8px;
  padding: 8px;
`;
