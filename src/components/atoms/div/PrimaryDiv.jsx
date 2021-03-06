import styled from "styled-components";
import { BaseDiv } from "./BaseDiv";

export const PrimaryDiv = (props) => {
  const { children } = props;
  return <SDiv>{children}</SDiv>;
};

const SDiv = styled(BaseDiv)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
