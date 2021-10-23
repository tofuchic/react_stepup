import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryDiv } from "../../atoms/div/PrimaryDiv";
import { SecondaryDiv } from "../../atoms/div/SecondaryDiv";
import { UserArea } from "../../atoms/div/UserArea";
import { ShortInput } from "../../atoms/input/ShortInput";
import { SearchInput } from "../../molecules/SearchInput";
import { UserCard } from "../../organisms/users/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: { val },
    name: `とうふめんたるちきんはーと #${val}`,
    image: "https://source.unsplash.com/aG2K-plT4eY",
    email: "tofuchic@example.com",
    phone: "080-1234-5678",
    company: {
      name: "にがり"
    }
  };
});

export const AtomicDesign = () => {
  return (
    <>
      <SecondaryDiv display="flex">
        <h1>atoms</h1>
        <ShortInput></ShortInput>
        <br />
        <PrimaryButton>テスト</PrimaryButton>
        <br />
        <SecondaryButton>テスト</SecondaryButton>
      </SecondaryDiv>
      <PrimaryDiv>
        <SearchInput placeholder="検索条件を入力してください" />
      </PrimaryDiv>
      <PrimaryDiv>
        <UserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </UserArea>
      </PrimaryDiv>
    </>
  );
};
