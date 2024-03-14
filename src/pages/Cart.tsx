import { useState } from "react";
import "./styling/cart.scss";
import Cartbutton from "../components/cart/Cartbutton";
import CartItem from "../components/cart/CartItem";
import { useCartStore } from "../store/CartStore";
import { useNavigate } from "react-router-dom";
import { postOrderSubmit } from "../api/apiCalls";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const { order, priceTotal, setOrderNumber } = useCartStore();

  const navigate = useNavigate();
  const navigateToStatus = async () => {
    try {
      const orderNumber = await postOrderSubmit({
        details: {
          order: order.map((item) => ({
            name: item.name,
            price: item.price,
          })),
        },
      });
      console.log("Order submit. Order number:", orderNumber);
      if (orderNumber) {
        setOrderNumber(orderNumber);
        navigate("/status");
      }
    } catch (err) {
      throw new Error();
    }
  };

  return (
    <>
      {showCart && (
        <div className={`cart-overlay ${showCart}`}>
          <section className="cart__container">
            <div className="square"></div>
            <h1 className="cart__title">Din Beställning</h1>
            {order.map((item) => (
              <CartItem key={item.name} {...item} />
            ))}

            <section className="cart__total">
              <section className="cart__total-container">
                <h3>
                  Total
                  <span className="dots2">
                    ...........................................
                  </span>
                </h3>
                <h3 className="cart__total--price">{priceTotal} kr</h3>
              </section>

              <p className="cart__VAT-info">inkl moms + drönarleverans</p>
            </section>

            <button onClick={navigateToStatus} className="cart__order--btn">
              Take my money!
            </button>
          </section>
        </div>
      )}
      <Cartbutton handleClick={toggleCart} />
    </>
  );
};

export default Cart;
