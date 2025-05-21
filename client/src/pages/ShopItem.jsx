import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) {
    return (
      <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
        <span className="text-gray-400">No Image</span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-square">
      <img
        src={images[current].image}
        alt={`Product ${current + 1}`}
        className="object-contain w-full h-full rounded-lg"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 w-10 h-10">
        {images.map((item, idx) => (
          <img src={item.image} alt={`Product ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

const ShopItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <Skeleton className="h-8 w-1/2 mb-6" />
        <div className="flex gap-8">
          <Skeleton className="w-80 h-80 rounded-lg" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-80 w-full">
          <ImageSlider images={product.images || []} />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-2xl font-semibold text-primary">
            ${product.price}
          </div>
          <div className="text-gray-700">{product.description}</div>
          <Button className="mt-4 w-full md:w-auto">Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
