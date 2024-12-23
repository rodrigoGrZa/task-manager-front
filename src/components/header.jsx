import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black/90 text-white py-4 shadow-md fixed top-0 left-0 w-full z-10 border-b-1 ">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-gray-400 transition">
            Task Manager
          </Link>
        </h1>
        <Link to="/about" className="hover:text-gray-400 transition">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
