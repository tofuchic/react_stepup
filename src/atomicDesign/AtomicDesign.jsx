import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../components/atoms/button/SecondaryButton";
import { PrimaryDiv } from "../components/atoms/div/PrimaryDiv";

export const AtomicDesign = () => {
  return (
    <>
      <PrimaryDiv>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>テスト</SecondaryButton>
      </PrimaryDiv>
    </>
  );
};
