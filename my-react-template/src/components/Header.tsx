import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 bg-white text-black shadow-md z-10 border-b border-gray-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-gray-600 transition duration-300">LOGAN SMITH</Link>
        </h1>
        <nav className="flex space-x-6 text-lg items-center">
          <Link to="/portfolio" className="hover:text-gray-600 transition duration-300">LANGUAGES</Link>
          <span>|</span>
          <Link to="/resume" className="hover:text-gray-600 transition duration-300">RESUME</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;