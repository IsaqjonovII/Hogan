import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./style.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((_userCrendential) => {
        navigate("/products");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="register__page">
      <form className="register__form" autoComplete="off" onSubmit={createUser}>
        <h1 className="register__title">Register to create an account</h1>
        <div className="email">
          <label htmlFor="email__input">E-mail Address*</label>
          <input
            required
            type="text"
            value={email}
            id="email__input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password__input">Password*</label>
          <input
            required
            type="password"
            minLength={8}
            value={password}
            id="password__input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <h4 className="password__reminder">
          Minimum 8 characters and 1 upper case character
        </h4>
        <button className="register__btn" type="submit">Confirm and Register</button>
      </form>
    </div>
  );
};

export default Register;
