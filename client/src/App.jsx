import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Checkout,
  About,
  Home,
  LoginRegister,
  Shop,
  ShopItem,
  Profile,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopItem />} />
        <Route path="/auth" element={<LoginRegister />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
