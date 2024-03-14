import React from "react";
import Add from "../../assets/icons/add.png";
import Dots from "../common/Dots";
import "./menuItem.scss";
import { useCartStore } from "../../store/CartStore";

interface MenuItemProps {
  id: string;
  title: string;
  desc: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, desc, price }) => {
  const { addToCartStore } = useCartStore();

  return (
    <div className="menu__item">
      <img
        onClick={() => {
          console.log("image clicked");
          addToCartStore(title, price);
        }}
        className="button__add"
        src={Add}
        alt="Add to cart"
      />

      <section className="item__text-container">
        <div className="item__title-container">
          <h3 className="item__title">{title}</h3>
          <Dots />
        </div>
        <p className="desc">{desc}</p>
      </section>
      <h3 className="item__price">{price} kr</h3>
    </div>
  );
};

export default MenuItem;
//Stäöll relevanta grejer på samma rad och lägg in dots emellan med overflow hidden, kirrbakirr
