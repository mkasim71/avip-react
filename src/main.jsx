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
import DetailProductPage from "./pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProfilePage from "./pages/profile";
import Navbar from "./components/Layouts/Navbar";
import DarkModeContextProvider from "./context/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/counter",
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
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
