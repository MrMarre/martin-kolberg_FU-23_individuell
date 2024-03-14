import "./styling/about.scss";
import MsCortado from "../assets/images/ms_cortado2.png";
import Hamburger from "../components/common/Hamburger";
import Footer from "../components/common/Footer";
import AboutText from "../components/aboutText/AboutText";
import Header from "../components/common/Header";

const About = () => {
  return (
    <section className="about__page">
      <Header />
      <Hamburger />
      <AboutText />
      <img
        className="founder-image"
        src={MsCortado}
        alt="Picture of founder here"
      />
      <Footer />
    </section>
  );
};

export default About;
