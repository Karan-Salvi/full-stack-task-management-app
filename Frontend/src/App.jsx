import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Menu from "./pages/MenuPage/Menu";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/OrderPage/Order";
import OrderHistory from "./pages/OrderPage/OrderHistory";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Homepage from "./pages/Home/Homepage";

function App() {
  let api = import.meta.env.VITE_API_URL
  console.log("My backend URI", import.meta.env.VITE_API_URL);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
