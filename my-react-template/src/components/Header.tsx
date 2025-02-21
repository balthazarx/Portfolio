import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 bg-black text-white shadow-lg z-10">
      <div className="flex justify-between items-center">
        <nav className="flex space-x-6 text-lg">
          <ul className="flex space-x-6">
            <li>
              <Link to="/portfolio" className="hover:text-gray-400 transition duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-gray-400 transition duration-300">
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <h1 className="text-4xl font-extrabold">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Logan Smith
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
