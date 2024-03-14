import Bag from "../../assets/icons/bag.png";
import "./CartButton.scss";
import { useCartStore } from "../../store/CartStore";

interface CartButtonProps {
  handleClick: () => void;
}

const Cartbutton: React.FC<CartButtonProps> = ({ handleClick }) => {
  const { itemsTotal } = useCartStore();
  return (
    <div onClick={handleClick} className="cart__btn-container">
      <img className="cart__btn" src={Bag} alt="A shopping cart symbol" />

      {itemsTotal > 0 && <p className="btn--red-circle">{itemsTotal}</p>}
    </div>
  );
};

export default Cartbutton;
