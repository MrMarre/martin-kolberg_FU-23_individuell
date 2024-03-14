import "./Hamburger.scss";
import Navicon from "../../assets/icons/navicon.png";
import NAV from "../nav/NAV";
import { useState } from "react";
import Close from "../../assets/icons/close.png";

const Hamburger: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <img
        className="hamburger"
        src={isNavOpen ? Close : Navicon}
        alt="Navigation symbol should be here"
        onClick={toggleNav}
      />
      {isNavOpen && <NAV onClose={toggleNav} />}
    </>
  );
};

export default Hamburger;
