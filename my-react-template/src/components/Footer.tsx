import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center p-6 bg-white text-black border-t border-gray-300 mt-12">
      <a 
        href="https://www.linkedin.com/in/logan-smith-a2a3b0212/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mx-6 text-3xl hover:text-gray-600 transition duration-300"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/balthazarx" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mx-6 text-3xl hover:text-gray-600 transition duration-300"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;