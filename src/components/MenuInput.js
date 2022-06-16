import { useContext, useRef } from "react";
import CartContext from "../store/cart-context";

const MenuInput = (props) => {
  const inputAmountRef = useRef();
  const context = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    )
      return;
    props.onAmount(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className="menu-list__form">
      <div>
        <label htmlFor={props.id}>Amount</label>
        <input ref={inputAmountRef} id={props.id} {...props.input}></input>
      </div>
      <button className="menu-list__form--btn" type="submit">
        +Add
      </button>
    </form>
  );
};

export default MenuInput;
