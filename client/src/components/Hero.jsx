import { Link } from "react-router-dom";

export default function Hero({ title, currentPage }) {
  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-sm sm:text-base text-gray-300">
          <Link to="/" className="underline hover:text-white transition">
            home
          </Link>{" "}
          / {currentPage}
        </p>
      </div>
    </section>
  );
}
