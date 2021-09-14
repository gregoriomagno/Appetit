import React, { useState, useContext } from "react";
import StoreConstext from "../../Store/Context";
import { useHistory } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Logo from "../../../assets/Login/Vector.svg";
import FieldInput from "../../UI/FieldInput/FieldInput";
import "./Login.scss";

function initialState() {
  return { email: "", password: "" };
}

function login({ email, password }) {
  // console.log("login");
  if (email === "gregorio@gmail.com" && password === "gregorio") {
    // console.log("senha e email ok");
    return { token: "123" };
  } else {
    return { erro: "usuário ou senha invalido" };
  }
}

function validFields(email,password){
  //Expressão regular que valida o email
  let expValidEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/);

  //Expressão regular que valida a senha (minimo de 8 caracteres)
  let expValidPassword = new RegExp(/^(?=.*[A-Za-z])[A-Za-z\d]{8,}/);

  const  emailValid = expValidEmail.test(email);
  const  passwordValid = expValidPassword.test(password);
  
    return !emailValid || !passwordValid;
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



  function onSubmit(event) {
    event.preventDefault();
    console.log(values);

    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push("/pedidos");
    }

    setValues(initialState);
  }

  return (
    <div className="Container-login">
      <form autoComplete="nope" onSubmit={onSubmit} className="Form-login">
        <img src={Logo} alt="Logo" className="Logo" />

        <p className="Title-wellcome">Seja bem-vindo!</p>

        <p className="Text-body">
          Nós sabemos a importância de estar sempre de barriga cheia e o quanto
          isso pode ajudar no seu dia.
        </p>

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
        
          <Button disabled={validFields(values.email,values.password)}>Entrar</Button>
        {/* verificar */}
        <div className="Text-baseboard">
          <p>Infoway Gestão em Saúde ©, 2019.</p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
