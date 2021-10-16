import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SDiv>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!!</SButton>
    </SDiv>
  );
};

const SDiv = styled.div`
  border: solid 8px purple;
  border-radius: 24px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 8px;
  color: green;
`;
const SButton = styled.button`
  margin: 8px;
  background-color: lightgreen;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: lightblue;
    color: gray;
    cursor: pointer;
  }
`;
