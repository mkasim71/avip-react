const Button = (props) => {
  const { children = "Register", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold text-white ${variant} rounded-md`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
