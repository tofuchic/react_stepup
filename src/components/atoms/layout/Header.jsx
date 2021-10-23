import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <div className="App">
        <h1>React/TypeScript勉強用</h1>
        <SA href="https://www.udemy.com/course/react_stepup">参考元</SA>
        <SLink to="/">Home</SLink>
        <SLink to="/page1">Page1</SLink>
        <SLink to="/page2">Page2</SLink>
        <SLink to="/atomicDesign">AtomicDesign</SLink>
        <SLink to="/aaaaaaaaaaaaa">404</SLink>
      </div>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: purple;
  color: white;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
`;

const SLink = styled(Link)`
  padding: 0 8px;
  color: white;
`;

const SA = styled.a`
  padding: 0 8px;
  color: white;
`;
