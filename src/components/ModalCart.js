import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "./Modal";

const ModalCart = (props) => {
  const context = useContext(CartContext);
  const hasItems = context.items.length > 0;

  const cartItemAddHandler = (item) => {
    console.log(item);
    context.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (item) => {
    context.removeItem(item);
  };

  const cartItems = (
    <ul className="cart__list">
      {context.items.map((item) => (
        <li key={item.id} className="cart__item">
          <div className="cart__item-description">
            <span className="cart__item-description--name">{item.name}</span>
            <div className="cart__item-description--box">
              <span className="cart__item-description--price">
                ${item.price.toFixed(2)}
              </span>
              <span className="cart__item-description--amount">
                x{item.amount}
              </span>
            </div>
          </div>
          <div className="cart__action">
            <button
              className="cart__action-btn"
              onClick={cartItemRemoveHandler.bind(null, item)}
            >
              -
            </button>
            <button
              className="cart__action-btn"
              onClick={cartItemAddHandler.bind(null, item)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className="modal__amount">
        <div className="modal__amount-title">Total Amount</div>
        <div className="modal__amount-number">
          ${context.totalAmount.toFixed(2)}
        </div>
      </div>
      <div className="modal__action">
        <button className="menu-list__form--btn" onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className="menu-list__form--btn">Order</button>}
      </div>
    </Modal>
  );
};

export default ModalCart;
