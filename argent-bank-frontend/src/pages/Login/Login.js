import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSignIn } from "../../redux/reducer/authSlice.js";

import Field from "../../components/Field/Field.jsx";
import Button from "../../components/Button/Button.jsx";

import "./Login.css";

export default Login;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // mettre à jour la valeur

  //* Stockage des valeurs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState(false);

  //* Envoi du formulaire
  const submit = async (event) => {
    event.preventDefault();

    //* Envoi de la requête vers l'API pour la connexion
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //* Vérifiez si la requête a réussi
      if (response.status === 200) {
        const responseData = response.data; // récupérer les données
        const token = responseData.body.token; // extraire le token d'authentification
        localStorage.setItem("authToken", token); // sauvegarder le token
        dispatch(setSignIn({ token })); // envoyer l'action au store (utilisateur connecté)
        navigate("/User"); // redirection
      } else {
        setErrorMessage(response.statusText); // mettre à jour le message d'erreur
      }
    } catch {
      //* Gestion des erreurs imprévues
      setErrorMessage("An error occurred."); // mettre à jour le message d'erreur
    }
  };

  return (
    <main className="main-login">
      <section className="section-login">
        <div className="form-header">
          <i className="fa fa-user-circle"></i>
          <h2>Sign In</h2>
        </div>
        <form onSubmit={submit}>
          {errorMessage && <p className="error-login">{errorMessage}</p>}

          <Field
            label="Username"
            content="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="username"
          />
          <Field
            label="Password"
            content="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            autocomplete="current-password"
          />

          <div className="check-login">
            <input
              type="checkbox"
              id="remember"
              name="check-remember"
              onChange={() => setRemember(!remember)}
              checked={remember}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <Button style={{ textDecoration: "underline" }} content="Sign In" className="btn-login" />
        </form>
      </section>
    </main>
  );
}
