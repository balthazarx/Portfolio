import { Link } from "react-router-dom";
import profileImage from "../assets/Me.jpg";

const About: React.FC = () => {
  return (
    <section className="bg-white text-black pt-32 px-6 text-center">
      <div className="flex justify-center">
        <img 
          src={profileImage}
          alt="Logan Smith"
          className="w-32 h-32 rounded-full mb-4 shadow-lg border-4 border-black"  
        />
      </div>
      <h2 className="text-4xl font-extrabold text-black mb-4">Hi, I'm Logan Smith</h2> 
      <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
        I am passionate about working with my hands and creating things that inspire me. From 3D printing to web development, 
        I aim to build functional solutions that will further my career and help others.
      </p>
      <Link to="/contact" className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300 text-xl">
        Get in Touch
      </Link>
    </section>
  );
};

export default About;
