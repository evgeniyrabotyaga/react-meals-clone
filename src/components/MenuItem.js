import { useContext } from "react";
import CartContext from "../store/cart-context";
import MenuInput from "./MenuInput";

const MenuItem = (props) => {
  const context = useContext(CartContext);

  const amountHandler = (amount) => {
    context.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className="menu-list__item">
      <div className="menu-list__information">
        <span className="menu-list__information--name">{props.name}</span>
        <span className="menu-list__information--description">
          {props.description}
        </span>
        <span className="menu-list__information--price">
          ${props.price.toFixed(2)}
        </span>
      </div>
      <MenuInput
        onAmount={amountHandler}
        id={props.id}
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
    </li>
  );
};

export default MenuItem;
