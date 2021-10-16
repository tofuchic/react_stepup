const divStyle = {
  border: "solid 8px purple",
  borderRadius: "24px",
  padding: "8px",
  margin: "8px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};
const titleStyle = {
  margin: "8px",
  color: "green"
};
const buttonStyle = {
  margin: "8px",
  backgroundColor: "lightgreen",
  border: "none",
  padding: "8px",
  borderRadius: "8px"
  // InlineStyleではCSS疑似要素を記述することが出来ない
  // &:hover : {
  //   backgroundColor: "lightblue",
  //   color: "gray",
  //   cursor: "pointer"
  // }
};

export const InlineStyle = () => {
  return (
    <div style={divStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!!</button>
    </div>
  );
};
