import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryDiv } from "../../atoms/div/PrimaryDiv";
import { SecondaryDiv } from "../../atoms/div/SecondaryDiv";
import { ShortInput } from "../../atoms/input/ShortInput";
import { SearchInput } from "../../molecules/SearchInput";
import { UserCard } from "../../organisms/users/UserCard";

const user = {
  name: "とうふめんたるちきんはーと",
  image: "https://source.unsplash.com/aG2K-plT4eY",
  email: "tofuchic@example.com",
  phone: "080-1234-5678",
  company: {
    name: "にがり"
  }
};

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
      {/* レスポンシブデザインにしたいところ */}
      <SecondaryDiv>
        <PrimaryDiv>
          <UserCard user={user} />
          <UserCard />
        </PrimaryDiv>
        <PrimaryDiv>
          <UserCard />
          <UserCard />
        </PrimaryDiv>
      </SecondaryDiv>
    </>
  );
};
