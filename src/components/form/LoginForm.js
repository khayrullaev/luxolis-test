import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import TextInput from "../../components/input/TextInput";
import { ContainedButton, TextButton } from "../button";

// styles
import "../../styles/components.css";

// assets
import UserIcon from "../../assets/user_icon.svg";
import LockIcon from "../../assets/lock_icon.svg";

// utils
import { login } from "../../utils/mock";
import { validatePassword } from "../../utils/validation";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrormessage] = useState("");

  const handleSubmit = () => {
    if (!validatePassword(password)) {
      setErrormessage("Wrong combination");
    } else {
      if (!!errorMessage) setErrormessage("");
      requestLogin();
    }
  };

  const requestLogin = async () => {
    try {
      await login(username, password).then((res) => {
        if (res.status === 200) navigate("/default", { replace: true });
      });
    } catch (error) {
      alert("The provided username or password is wrong");
      console.error(error.message);
    }
  };

  return (
    <div className="login-form">
      <TextInput
        name={"username"}
        icon={UserIcon}
        placeholder="username"
        value={username}
        setValue={setUsername}
      />
      <TextInput
        name={"password"}
        icon={LockIcon}
        placeholder="password"
        value={password}
        setValue={setPassword}
        errorMessage={errorMessage}
      />
      <ContainedButton title={"LOGIN"} onClick={handleSubmit} />
      <TextButton title={"Forgot password?"} />
    </div>
  );
};

export default LoginForm;
