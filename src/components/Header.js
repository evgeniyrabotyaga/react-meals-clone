import React from "react";
import HeaderGallery from "./HeaderGallery";
import HeaderNav from "./HeaderNav";

const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderNav onShowCart={props.onShowCart} />
      <HeaderGallery />
    </React.Fragment>
  );
};

export default Header;
