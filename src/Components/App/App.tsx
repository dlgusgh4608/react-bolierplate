import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global-style";
import Components from "./Components";
import { mode } from "../../styles/theme";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const theme = themeMode === "light" ? mode.light : mode.dark;

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme}>
      <button onClick={toggleTheme}>밤낮</button>
      <GlobalStyle />
      <Components />
    </ThemeProvider>
  );
};

export default App;
