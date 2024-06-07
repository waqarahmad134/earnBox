import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./errors/error-page";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Earn from "./pages/Earn";
import Profile from "./pages/Profile";
import TradingViewWidget from "../src/pages/test"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const router = createBrowserRouter([
  <ScrollRestoration />,
  {
    path: "/test",
    element: <TradingViewWidget />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/earn",
    element: <Earn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <div>
      <ToastContainer />
      <PrimeReactProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
