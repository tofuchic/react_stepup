import styled from "styled-components";
import { BaseDiv } from "./BaseDiv";

export const SecondaryDiv = (props) => {
  const { children } = props;
  return <SDiv>{children}</SDiv>;
};

const SDiv = styled(BaseDiv)`
  display: block;
  text-align: center;
`;
