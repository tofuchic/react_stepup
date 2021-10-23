import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  console.log(user);
  return (
    <Card>
      {user !== undefined ? (
        <>
          <UserIconWithName image={user.image} name={user.name} />
          <SDl>
            <dt>mail</dt>
            <dd>{user.email}</dd>
            <dt>tel</dt>
            <dd>{user.phone}</dd>
            <dt>company</dt>
            <dd>{user.company.name}</dd>
          </SDl>
        </>
      ) : (
        <>
          <UserIconWithName />
          <SDl>
            <dt>mail</dt>
            <dd>example@mail.com</dd>
            <dt>tel</dt>
            <dd>080-1234-5678</dd>
            <dt>company</dt>
            <dd>example corp.</dd>
          </SDl>
        </>
      )}
    </Card>
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
    overflow-wrap: break-word;
  }
`;
