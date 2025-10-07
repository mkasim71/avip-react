import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint rerum accusantium facere, deleniti vel assumenda blanditiis   perspiciatis dolorum sunt placeat sapiente porro consequuntur? Quo,     accusantium dolorem. Pariatur, neque non.",
  },
  {
    id: 2,
    title: "Sepatu Adidas",
    price: "Rp 1.800.000",
    image: "/images/shoes-2.jpg",
    description:
      "Dolor sit amet consectetur adipisicing elit. Nisi sint rerum accusantium facere, deleniti vel assumenda blanditiis   perspiciatis dolorum sunt placeat sapiente porro consequuntur? Quo,     accusantium dolorem.",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
