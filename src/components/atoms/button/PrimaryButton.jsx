import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  margin: 8px;
  background-color: lightsalmon;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
