import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 tofuchic Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: purple;
  color: white;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
