import { Fragment, useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint rerum accusantium facere, deleniti vel assumenda blanditiis perspiciatis dolorum sunt placeat sapiente porro consequuntur? Quo, accusantium dolorem. Pariatur, neque non.",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    price: 1800000,
    image: "/images/shoes-2.jpg",
    description:
      "Dolor sit amet consectetur adipisicing elit. Nisi sint rerum accusantium facere, deleniti vel assumenda blanditiis perspiciatis dolorum sunt placeat sapiente porro consequuntur? Quo,   accusantium dolorem.",
  },
  {
    id: 3,
    name: "Sepatu Anjay",
    price: 800000,
    image: "/images/shoes-2.jpg",
    description:
      "Dolor sit amet consectetur adipisicing elit. Nisi sint rerum accusantium facere, deleniti vel assumenda blanditiis Quo, accusantium dolorem.",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // setCart([{ id: 1, qty: 1 }]);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
      // console.log(JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    return (
      localStorage.removeItem("email"),
      localStorage.removeItem("password"),
      (window.location.href = "/login")
    );
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="mb-2 ml-5 text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-left border-separate table-auto border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
