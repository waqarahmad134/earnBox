import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./errors/error-page";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Earn from "./pages/Earn";
import Profile from "./pages/Profile";
import TradingViewWidget from "../src/pages/test";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from "./pages/Card";

function App() {
   return (
    <div>
      <ToastContainer />
      <PrimeReactProvider>
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/test" element={<TradingViewWidget />} />
              <Route path="/card" element={<Card />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/earn" element={<Earn />} />
              <Route path="/profile" element={<Profile />} />
             
            </Routes>
          </Router>
        </ChakraProvider>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
