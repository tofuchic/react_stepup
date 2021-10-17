import styled from "styled-components";
import { BaseInput } from "./BaseInput";

export const LongInput = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled(BaseInput)`
  width: 80%;
`;
