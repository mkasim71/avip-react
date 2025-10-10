import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("login");
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <Button classname="w-full bg-blue-600" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
