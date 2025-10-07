const Button = (props) => {
  const { children = "Register", classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold text-white ${classname} rounded-md`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
