const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "yellow"
};

export const ChildArea = (props) => {
  const { viewText, text } = props;

  return (
    <>
      {viewText ? (
        <div style={style}>
          <p>{text}</p>
        </div>
      ) : null}
    </>
  );
};
