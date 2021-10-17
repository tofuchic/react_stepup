import { LongInput } from "../atoms/input/LongInput";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const SearchInput = () => {
  return (
    <>
      <LongInput placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </>
  );
};
