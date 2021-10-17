import styled from "styled-components";

export const PrimaryDiv = (props) => {
  const { children } = props;
  return <SDiv>{children}</SDiv>;
};

const SDiv = styled.div`
  border: solid 4px grey;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
