import "./cartItem.scss";
import { useCartStore } from "../../store/CartStore";
import VectorUp from "../../assets/icons/vector-up.png";
import VectorDown from "../../assets/icons/vector-down.png";
import Dots from "../common/Dots";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity }) => {
  const { addToCartStore, deleteFromCartStore } = useCartStore();

  return (
    <article className="cart__item">
      <div className="left-container">
        <div className="container__text">
          <h3 className="cart__item-name">
            {name}
            <span className="dots2">
              ..........................................................
            </span>
          </h3>

          <p className="item__total">{price * quantity} kr</p>
        </div>
      </div>

      <div className="right-container">
        <img
          src={VectorUp}
          onClick={() => addToCartStore(name, price)}
          className="item__increment"
        />

        <p className="item__number">{quantity}</p>
        <img
          src={VectorDown}
          onClick={() => deleteFromCartStore(name, price)}
          className="item__decrement"
        />
      </div>
    </article>
  );
};

export default CartItem;
