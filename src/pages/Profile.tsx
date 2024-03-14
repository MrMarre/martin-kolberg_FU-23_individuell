import Hamburger from "../components/common/Hamburger";

import "./styling/profile.scss";
import Header from "../components/common/Header";
import avatar from "../assets/images/avatar.png";
import OrderHistory from "../components/orderHistory/OrderHistory";

import FormSignup from "../components/formSignup/FormSignup";
import { useUserStore } from "../store/UserStore";

const Profile = () => {
  const { loggedIn } = useUserStore();

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

        {!loggedIn && <FormSignup />}
      </section>

      <Hamburger />
    </>
  );
};

export default Profile;
