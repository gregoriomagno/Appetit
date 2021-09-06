import React, { useState, useContext } from "react";
import StoreConstext from "components/Store/Context";
import { useHistory } from "react-router-dom";
import Button from "components/UI/Button/Button";
import Logo from "./Vector.svg";
import FieldInput from "components/UI/FieldInput/FieldInput";
import "./Login.scss";

function initialState() {
  return { email: "", password: "" };
}

function login({ email, password }) {
  console.log("login");
  if (email === "admin" && password === "admin") {
    console.log("senha e email ok");
    return { token: "123" };
  } else {
    return { erro: "usuário ou senha invalido" };
  }
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreConstext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }


  function checkEmptyFields(){
      return (values.email === '') || (values.password === '');
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(values);

    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push("/");
    }

    setValues(initialState);
  }

  return (
    <div className="Container-login">
      <form autoComplete="nope" onSubmit={onSubmit} className="Form-login">
        <img src={Logo} alt="Logo" className="Logo" />

        <p className="Title-wellcome">Seja bem-vindo!</p>

        <text className="Text-body">
          Nós sabemos a importância de estar sempre de barriga cheia e o quanto
          isso pode ajudar no seu dia.
        </text>

        <div className="Field-email">
          <FieldInput
            placeholder="Email"
            id="email"
            type="text"
            name="email"
            autoComplete="off"
            onChange={onChange}
            value={values.email}
          />
        </div>
        <div className="Field-password">
          <FieldInput
            placeholder="Senha"
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            onChange={onChange}
            value={values.password}
          />
        </div>

        <button type="button" className="Button-forgot-password" >
          recuperar minha senha
        </button>
        
          <Button disabled={checkEmptyFields()}>Entrar</Button>
        
        <div className="Text-baseboard">
          <p>Infoway Gestão em Saúde ©, 2019.</p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
