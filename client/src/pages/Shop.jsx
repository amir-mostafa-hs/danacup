import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "title-asc", label: "Title: A-Z" },
  { value: "title-desc", label: "Title: Z-A" },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price-asc");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log("data is:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products;
  // .filter((p) => p?.title?.toLowerCase().includes(search.toLowerCase()))
  // .sort((a, b) => {
  //   if (sort === "price-asc") return a.price - b.price;
  //   if (sort === "price-desc") return b.price - a.price;
  //   if (sort === "title-asc") return a.title.localeCompare(b.title);
  //   if (sort === "title-desc") return b.title.localeCompare(a.title);
  //   return 0;
  // });

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            console.log(product);
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
              >
                <img
                  src={product.images[0]?.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-primary font-bold mb-4">${product.price}</p>
                <Button asChild>
                  <Link to={`/shop/${product.id}`}>View Details</Link>
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;
