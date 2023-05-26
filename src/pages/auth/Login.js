import React from "react";

// components
import LoginForm from "../../components/form/LoginForm";

// styles
import "../../styles/login.css";

// assets
import CartIcon from "../../assets/cart_icon.svg";

const Login = () => {
  return (
    <div className="login">
      <img src={CartIcon} />

      <LoginForm />
    </div>
  );
};

export default Login;
