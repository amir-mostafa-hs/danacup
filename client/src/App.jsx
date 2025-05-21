import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Checkout,
  Help,
  Home,
  Login,
  Register,
  Shop,
  ShopItem,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopItem />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/help",
//     element: <Help />,
//   },
//   {
//     path: "/shop",
//     element: <Shop />,
//   },
//   {
//     path: "/shop/:id",
//     element: <ShopItem />,
//   },
//   {
//     path: "/auth/register",
//     element: <Register />,
//   },
//   {
//     path: "/auth/login",
//     element: <Login />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/checkout",
//     element: <Checkout />,
//   },
// ]);
