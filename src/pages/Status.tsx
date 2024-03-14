import { useEffect, useState } from "react";
import "./styling/status.scss";
import Drone from "../assets/images/drone.png";
import { getOrderEta } from "../api/apiCalls";
import { useCartStore } from "../store/CartStore";
import { useNavigate } from "react-router-dom";

const Status: React.FC = () => {
  const [eta, setEta] = useState<number>(0);
  const navigate = useNavigate();
  const { orderNumber, priceTotal } = useCartStore();

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    sessionStorage.setItem(
      "savedOrder",
      JSON.stringify({ orderNumber, priceTotal })
    );
  }, [orderNumber]);

  useEffect(() => {
    const getEta = async () => {
      const response = await getOrderEta(orderNumber);
      if (response) {
        setEta(response);
      }
    };
    getEta();
  }, [orderNumber]);

  return (
    <>
      <section className="status__container">
        <h3 className="status__orderNr">
          Ordernummer: <b>{orderNumber}</b>
        </h3>

        <img
          className="drone"
          src={Drone}
          alt="A drone holding a cup of coffee"
        />

        <h1 className="status__message">Din beställning är på väg!</h1>
        <h3 className="message__eta">
          <b>{eta}</b> minuter
        </h3>

        <button onClick={handleNavigateToProfile} className="button__eta">
          Ok, cool!
        </button>
      </section>
    </>
  );
};

export default Status;

/* const [responseData, setResponseData] = useState<StatusRequestBody>([]); */
