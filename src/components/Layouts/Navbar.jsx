import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center p-2 ml-5 bg-gray-800 rounded-md">
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;
