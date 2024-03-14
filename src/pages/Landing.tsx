import "./styling/landing.scss";
import image from "../assets/images/landingMiddle.png";
import { useNavigate } from "react-router-dom";

//Skippa länken och mangla lite useNavigate istället!!

const Landing = () => {
  const navigate = useNavigate();
  const handleNavigateToMenu = () => {
    navigate("/menu");
  };
  return (
    <>
      <section className="landing">
        <img
          onClick={handleNavigateToMenu}
          className="logo"
          src={image}
          alt="Click to see our menu"
        />
      </section>
    </>
  );
};

export default Landing;
