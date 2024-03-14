import "./orderhistory.scss";

const OrderHistory = () => {
  return (
    <section className="order__container">
      <h2 className="order__title">Orderhistorik</h2>

      <article className="order__item">
        <aside className="item__left">
          <h3 className="item__number">#AB1444482323X</h3>
          <p className="item__sum--text">total ordersumma</p>
        </aside>
        <aside className="item__right">
          <h3 className="item__date">20/03/06</h3>
          <p className="item__total--text">443 kr</p>
        </aside>
      </article>
      <hr className="horizontal-rule--thin" />

      <section className="order__container-sumtotal">
        <h3 className="order__spent--text">Totalt spenderat</h3>
        <h3 className="order__current--total">1669 kr</h3>
      </section>
    </section>
  );
};

export default OrderHistory;
