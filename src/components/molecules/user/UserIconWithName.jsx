import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <>
      {image !== undefined ? (
        <div className="App">
          <SImg height={160} width={160} src={image} alt="profile" />
          <SName>{name}</SName>
        </div>
      ) : (
        <div className="App">
          <SImg
            height={160}
            width={160}
            src="https://source.unsplash.com/-KLKu_pruJ4"
            alt="profile"
          />
          <SName>name</SName>
        </div>
      )}
    </>
  );
};

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: orangered;
`;
