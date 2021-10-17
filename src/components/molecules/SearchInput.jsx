import { PrimaryInput } from "../atoms/input/PrimaryInput";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const SearchInput = () => {
  return (
    <>
      <PrimaryInput placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </>
  );
};
