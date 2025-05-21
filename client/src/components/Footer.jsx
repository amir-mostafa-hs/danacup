import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 py-8">
      <div className="w-1/2 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">DanaCup</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            dolorum ab deleniti impedit quae earum vero est alias repellendus
            autem?
          </p>
          <nav className="mt-2 flex space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
          </nav>
        </div>
        {/* Right Side: Logo */}
        <div className="flex flex-row items-center w-1/2">
          <img src="/footer/image-12.png" alt="" />
          <img src="/footer/image-13.png" alt="" />
          <img src="/footer/image-14.png" alt="" />
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} DanaCup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
