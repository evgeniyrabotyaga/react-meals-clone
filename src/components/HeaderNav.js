import HeaderButton from "./HeaderButton";

const HeaderNav = (props) => {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar__container">
        <h1 className="header-text">ReactMeals</h1>
        <HeaderButton onShowCart={props.onShowCart} />
      </div>
    </nav>
  );
};

export default HeaderNav;
