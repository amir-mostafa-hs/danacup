import { useState, useEffect } from "react";

export default function HeroSlider({ images = [], interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full max-w-screen overflow-hidden">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Optional navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button key={index} className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`} onClick={() => setCurrent(index)} />
        ))}
      </div>
    </div>
  );
}
