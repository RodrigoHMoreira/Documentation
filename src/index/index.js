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
        <div id="Header">
          <HeaderDoc
            theme={theme}
            setTheme={setTheme}
            toggleTheme={toggleTheme}
          />
        </div>

        <div id="Menu">
          <MenuDoc
            one={"One"}
            two={"Two"}
            three={"Three"}
            four={"Four"}
            five={"Five"}
            six={"Six"}
            seven={"Seven"}
            eight={"Eight"}
            nine={"Nine"}
            ten={"Ten"}
            eleven={"Eleven"}
            twelve={"Twelve"}
            theme={theme}
          />
        </div>

        <div id="Content">
          <ContentDoc />
        </div>
      </div>
    </ThemeProvider>
  );
}