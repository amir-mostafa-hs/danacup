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
    </>
  );
}

export default App;
