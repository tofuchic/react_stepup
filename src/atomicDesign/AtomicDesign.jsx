import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../components/atoms/button/SecondaryButton";
import { PrimaryDiv } from "../components/atoms/div/PrimaryDiv";
import { SecondaryDiv } from "../components/atoms/div/SecondaryDiv";
import { ShortInput } from "../components/atoms/input/ShortInput";
import { SearchInput } from "../components/molecules/SearchInput";
import { UserCard } from "../components/organisms/users/UserCard";

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
          <UserCard />
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
