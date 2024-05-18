import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./errors/error-page";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Earn from "./pages/Earn";
import Profile from "./pages/Profile";
const router = createBrowserRouter([
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
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
