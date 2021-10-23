import { Footer } from "../atoms/layout/Footer";

export const FooterOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Footer />
      {children}
    </>
  );
};
