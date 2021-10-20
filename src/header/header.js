import React from "react";
import './header.css'

import logoLight from "../images/logoMybots_Light.png";

export default function HeaderDoc() {

  return (
    <header className="headerLight">
      <a href="https://mybots.app/" target="_blank">
        <img
          className="logo"
          src={logoLight}
          style={{ width: 220, height: 70 }}
        />
      </a>
     
    </header>
  );
}
