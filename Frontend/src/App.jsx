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

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
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
    </>
  );
}

export default App;
