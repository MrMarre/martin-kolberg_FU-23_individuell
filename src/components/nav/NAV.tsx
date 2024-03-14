import { useNavigate } from "react-router-dom";
import { FunctionComponent } from "react";
import "./NAV.scss";

interface NAVProps {
  onClose: () => void;
}

const NAV: FunctionComponent<NAVProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const handleNavigation = (page: string) => {
    navigate(`${page}`);
    onClose();
  };
  return (
    <section className="nav__container">
      <ul className="navigation">
        <li className="nav__item" onClick={() => handleNavigation("/menu")}>
          Meny
        </li>
        <hr className="horizontal-line" />
        <li className="nav__item" onClick={() => handleNavigation("/about")}>
          Vårt kaffe
        </li>
        <hr className="horizontal-line" />
        <li className="nav__item" onClick={() => handleNavigation("/profile")}>
          Min profil
        </li>
        <hr className="horizontal-line" />
        <li className="nav__item" onClick={() => handleNavigation("/status")}>
          Orderstatus
        </li>
      </ul>
    </section>
  );
};

export default NAV;
