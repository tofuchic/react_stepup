import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <div className="App">
        <h1>React/TypeScript勉強用</h1>
        <a href="https://www.udemy.com/course/react_stepup">参考元</a>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/atomicDesign">AtomicDesign</Link>
        <br />
        <Link to="/aaaaaaaaaaaaa">404</Link>
      </div>
    </SHeader>
  );
};

const SHeader = styled.header`
  border: solid 8px purple;
  /* border-radius: 24px; */
  padding: 8px;
  margin: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
