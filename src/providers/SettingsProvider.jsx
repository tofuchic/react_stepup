import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
  const { children } = props;

  const [count, setCount] = useState(0);
  const [text, setText] = useState("hoge");

  return (
    <SettingsContext.Provider value={{ count, setCount, text, setText }}>
      {children}
    </SettingsContext.Provider>
  );
};
