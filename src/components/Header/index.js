import React from "react";
import "./style.scss";
//import Logo from "./../../assets/graphics/logo.png";

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <h3 data-test="logoImg">Logo Here</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
