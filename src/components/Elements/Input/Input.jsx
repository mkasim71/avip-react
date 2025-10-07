const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      className="w-full px-3 py-2 text-sm border rounded opacity-50 text-slate-700 placeholder:"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
