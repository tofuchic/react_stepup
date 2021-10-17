import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../components/atoms/button/SecondaryButton";
import { PrimaryDiv } from "../components/atoms/div/PrimaryDiv";
import { PrimaryInput } from "../components/atoms/input/PrimaryInput";
import { SearchInput } from "../components/molecules/SearchInput";

export const AtomicDesign = () => {
  return (
    <>
      <PrimaryDiv>
        <PrimaryInput></PrimaryInput>
        <br />
        <PrimaryButton>テスト</PrimaryButton>
        <br />
        <SecondaryButton>テスト</SecondaryButton>
      </PrimaryDiv>
      <PrimaryDiv>
        <SearchInput placeholder="検索条件を入力してください" />
      </PrimaryDiv>
    </>
  );
};
