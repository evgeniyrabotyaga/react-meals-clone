import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ModalCart from "./components/ModalCart";
import CartHelper from "./store/CartHelper";
import Footer from "./components/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <CartHelper>
        {showCart && <ModalCart onCloseCart={closeCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Menu />
      </CartHelper>
      <Footer />
    </>
  );
}

export default App;
