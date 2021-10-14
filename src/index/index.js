import { useState } from "react";
import "./index.css";
import HeaderDoc from "../header/header";
import MenuDoc from "../menu/menu";
import ContentDoc from "../content/content";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme/theme";

export default function Index() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="index">
        <div id={theme === "light" ? "HeaderLight" : "HeaderDark"}>
          <HeaderDoc
            theme={theme}
            setTheme={setTheme}
            toggleTheme={toggleTheme}
          />
        </div>

        <MenuDoc theme={theme} />

        <ContentDoc theme={theme} />
      </div>
    </ThemeProvider>
  );
}