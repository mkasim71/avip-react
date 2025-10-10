import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./pages/products";
import ErrorPage from "./pages/404";
import "./index.css";
import Counter from "./components/Fragments/learn/Counter";
import UserList from "./components/Fragments/learn/UserList";
import Clock from "./components/Fragments/learn/Clock";
import Hello from "./components/Fragments/learn/Hello";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <UserList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clock",
    element: <Clock />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hello",
    element: <Hello />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
