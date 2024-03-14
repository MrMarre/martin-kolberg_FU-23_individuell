import { useState } from "react";
import { SignupRequest } from "../../api/models/SignupRequest";
import { postSignIn, postSignup } from "../../api/apiCalls";
import image from "../../assets/icons/airBean-icon-small.png";
import { useUserStore } from "../../store/UserStore";

const FormSignup = () => {
  const { setLoggedIn } = useUserStore();

  const [formData, setFormData] = useState<SignupRequest>({
    username: "",
    password: "Ariel",
  });
  const [token, setToken] = useState<string>();

  const signup = async () => {
    const response = await postSignup(formData);
    if (response) {
      console.log(response);
      setLoggedIn(response);
      getLoginToken();
    }
  };
  const getLoginToken = async () => {
    const response = await postSignIn(formData);
    if (response) {
      console.log(response);
      setToken(response);
    }
  };

  return (
    <article className="profile__overlay">
      <article className="overlay__content-center">
        <img className="overlay__logo" src={image} alt="AirBean logo" />
        <h1 className="overlay__title">Välkommen till AirBean-familjen!</h1>
        <p className="overlay__text">
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>
        <form className="overlay__login-form">
          <label className="label" htmlFor="name">
            Namn
          </label>
          <br />
          <input
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
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
        <button onClick={signup} className="btn-signup">
          Brew me a cup!
        </button>
      </article>
    </article>
  );
};

export default FormSignup;
