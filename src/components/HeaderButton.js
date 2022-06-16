import { useContext, useEffect, useState } from "react";
import CartIcon from "../assets/CartIcon";
import CartContext from "../store/cart-context";

const HeaderButton = (props) => {
  const context = useContext(CartContext);
  const numberOfCartItems = context.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const [isAdded, setIsAdded] = useState(false);

  const buttonClass = `header-button ${isAdded === true ? "bump" : ""}`;
  useEffect(() => {
    if (context.items.length === 0) return;
    setIsAdded(true);

    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [context.items]);

  return (
    <button className={buttonClass} onClick={props.onShowCart}>
      <span className="header-button__icon">
        <CartIcon></CartIcon>
      </span>
      <span className="header-button__text">Your Cart</span>
      <span className="header-button__amount">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
