import Hamburger from "../components/common/Hamburger";
import image from "../assets/icons/airBean-icon-small.png";
import "./styling/profile.scss";
import Header from "../components/common/Header";
import avatar from "../assets/images/avatar.png";
import OrderHistory from "../components/orderHistory/OrderHistory";

const Profile = () => {
  return (
    <>
      <section className="profile">
        <Header />
        <section className="avatar__container">
          <img src={avatar} alt="Common Avatar" />
          <h2 className="user__name">Sixten Kaffelövér</h2>
          <p className="user__email">sixten.kaffelover@zocom.se</p>
        </section>
        <OrderHistory />
        <article className="profile__overlay">
          <article className="overlay__content-center">
            <img className="overlay__logo" src={image} alt="AirBean logo" />
            <h1 className="overlay__title">Välkommen till AirBean-familjen!</h1>
            <p className="overlay__text">
              Genom att skapa ett konto nedan kan du spara och se din
              orderhistorik.
            </p>
            <form className="overlay__login-form">
              <label className="label" htmlFor="name">
                Namn
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Sixten Kaffelövér"
              />
              <label className="label" htmlFor="email">
                Epost
              </label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="sixten.kaffelover@zocom.se"
              />
              <br />
              <div className="checkbox__container">
                <input id="gdpr" className="checkbox-native" type="checkbox" />
                <label htmlFor="gdpr" className="checkbox" />
                <span className="checkbox__text">GDPR ok!</span>
              </div>
            </form>
            <button className="btn-signup">Brew me a cup!</button>
          </article>
        </article>
      </section>

      <Hamburger />
    </>
  );
};

export default Profile;
