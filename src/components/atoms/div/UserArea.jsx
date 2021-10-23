import styled from "styled-components";

export const UserArea = (props) => {
  const { children } = props;
  return <SDiv>{children}</SDiv>;
};

const SDiv = styled.div`
  padding-top: 24px;
  width: 100%;
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;
