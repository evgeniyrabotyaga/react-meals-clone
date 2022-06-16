import { createPortal } from "react-dom";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return <div className="modal__overlay" onClick={props.onCloseCart}></div>;
};

const ModalWindow = (props) => {
  return <div className="modal__window">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onCloseCart={props.onCloseCart} />,
        document.getElementById("modal")
      )}{" "}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
