import { Link } from "react-router-dom";
import profileImage from "../assets/Me.jpg";

const About: React.FC = () => {
  return (
    <section className="flex flex-row items-center text-left pt-32 px-6 max-w-7xl mx-auto gap-24">
      <div className="flex-1 space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
          I am passionate about working with my hands and creating things that inspire me. 
          From 3D printing to web development, I aim to build functional solutions that 
          further my career and help others.
        </p>
        <div className="flex justify-center pt-20">
          <Link 
            to="/contact" 
            className="bg-black text-white py-4 px-10 rounded-lg text-xl font-semibold transition-all duration-300 
                     hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img 
          src={profileImage}
          alt="Logan Smith"
          className="w-96 h-96 rounded-full shadow-lg border-4 border-gray-300 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default About;
