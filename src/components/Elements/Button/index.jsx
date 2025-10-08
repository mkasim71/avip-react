const Button = (props) => {
  const {
    children = "Register",
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold text-white ${classname} rounded-md`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
