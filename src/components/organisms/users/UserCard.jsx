import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/aG2K-plT4eY"
        alt="profile"
      />
      <p>name</p>
      <SDl>
        <dt>mail</dt>
        <dd>example@mail.com</dd>
        <dt>tel</dt>
        <dd>080-1234-5678</dd>
        <dt>company</dt>
        <dd>example corp.</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 64px;
    padding-bottom: 8px;
  }
`;
