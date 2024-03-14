import "./styling/menu.scss";
import { useEffect, useState } from "react";
import MenuItem from "../components/menuItem/MenuItem";

import Cart from "./Cart";
import Footer from "../components/common/Footer";
import Hamburger from "../components/common/Hamburger";
import { getMenuList } from "../api/apiCalls";
import Header from "../components/common/Header";

interface MenuInterFace {
  id: string;
  title: string;
  desc: string;
  price: number;
}

const Menu = () => {
  const [data, setData] = useState<MenuInterFace[]>([]);

  const errorMessage = "Det blev inget kaffe idag. DU BLIR UTAN! :(";
  useEffect(() => {
    const getMenu = async () => {
      const response = await getMenuList();
      if (response.menu) {
        setData(response.menu);
      }
    };

    getMenu();
  }, []);

  return (
    <>
      <Header />
      <Cart />
      <section className="menu">
        <h1>{data.length ? "Meny" : errorMessage} </h1>

        {data.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </section>
      <Hamburger />
      <Footer />
    </>
  );
};

export default Menu;

/* const Menu = () => {
  const [data, setData] = useState<MenuInterFace[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans"
      );

      const data = await response.json();
      setData(data.menu);
    };
    fetchData(); 
  }, []); */
