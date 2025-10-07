import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="insert your fullname"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      />
      <Button classname="w-full bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;
