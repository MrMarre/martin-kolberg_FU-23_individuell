import { useEffect, useState } from "react";
import { useCartStore } from "../../store/CartStore";
import { useUserStore } from "../../store/UserStore";
import "./orderhistory.scss";

const OrderHistory: React.FC = () => {
  const { loggedIn } = useUserStore();
  const {
    resetLatestCart,
    orderNumber,
    priceTotal,
    order: cartOrders,
  } = useCartStore();

  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    const savedOrderStr = sessionStorage.getItem("savedOrder");
    const savedOrder = savedOrderStr ? [JSON.parse(savedOrderStr)] : [];
    const combinedOrders = [...cartOrders, ...savedOrder];
    setOrders(savedOrder);
    console.log("Cart Orders:", cartOrders);
    console.log("Saved Order:", savedOrder);
    console.log("Combined Orders:", combinedOrders);
  }, [cartOrders]);
  return (
    <section className="order__container">
      <h2 className="order__title">Orderhistorik</h2>

      {orders.map((order, index) => (
        <section className="hejjj" key={index}>
          <article className="order__item">
            <aside className="item__left">
              <h3 className="item__number">#{order.orderNumber}</h3>
              <p className="item__sum--text">total ordersumma</p>
            </aside>
            <aside className="item__right">
              <h3 className="item__date">20/03/06</h3>
              <p className="item__total--text">{order.priceTotal} kr</p>
            </aside>
          </article>
          <hr className="horizontal-rule--thin" />
        </section>
      ))}

      <section className="order__container-sumtotal">
        <h3 className="order__spent--text">Totalt spenderat</h3>
        <h3 className="order__current--total">
          {orders.reduce(
            (total: number, order: { priceTotal: number }) =>
              total + order.priceTotal,
            0
          )}{" "}
          kr
        </h3>
      </section>
    </section>
  );
};

export default OrderHistory;
