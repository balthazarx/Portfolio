import { Link } from "react-router-dom";
import profileImage from "../assets/Me.jpg";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center pt-32 px-6">
      <div className="relative">
        <img 
          src={profileImage}
          alt="Logan Smith"
          className="w-40 h-40 rounded-full shadow-2xl border-4 border-black transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text 
                     leading-tight whitespace-nowrap mt-6">
        Hi, I'm Logan Smith
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mt-4 max-w-lg">
        I am passionate about working with my hands and creating things that inspire me. 
        From 3D printing to web development, I aim to build functional solutions that 
        further my career and help others.
      </p>

      <Link 
        to="/contact" 
        className="mt-6 bg-black text-white py-3 px-8 rounded-lg text-xl font-semibold transition-all duration-300 
                   hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Get in Touch
      </Link>
    </section>
  );
};

export default About;
