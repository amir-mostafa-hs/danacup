<<<<<<< HEAD
import { ProductCard } from "../src/components/ProductCard";
import { HeroSlider } from "../src/components/HeroSlider";
function App() {
  return (
    <>
      <div>
        <h1>Welcome to the React App</h1>
        <ProductCard imageUrl="https://via.placeholder.com/300" productName="Wireless Headphones" price="$49.99" tag="Electronics" discountLabel="-30%" />

        <HeroSlider
          images={[
            "https://via.placeholder.com/1200x600?text=Slide+1",
            "https://via.placeholder.com/1200x600?text=Slide+2",
            "https://via.placeholder.com/1200x600?text=Slide+3",
          ]}
        />
      </div>
=======
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
>>>>>>> 5db28482d5a60a9129340e2f840efe541704c177
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
