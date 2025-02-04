import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Import the profile image from the src folder
import profileImage from './assets/Me.jpg';

// Header Component (Overlapping, Sticky with Black and White Design)
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 bg-black text-white shadow-lg z-10">
      {/* Header Layout: "Logan Smith" stays on the right */}
      <div className="flex justify-between items-center">
        <nav className="flex space-x-6 text-lg">
          <li><Link to="/portfolio" className="hover:text-gray-400 transition duration-300">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link></li>
          <li><Link to="/resume" className="hover:text-gray-400 transition duration-300">Resume</Link></li>
        </nav>
        {/* Logan Smith stays on the right */}
        <h1 className="text-4xl font-extrabold">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Logan Smith
          </Link>
        </h1>
      </div>
    </header>
  );
};

// Footer Component with LinkedIn and GitHub icons (Black and White Design)
const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-6 bg-black text-white mt-12">
      <a 
        href="https://www.linkedin.com/in/logan-smith-a2a3b0212/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mx-6 text-3xl hover:text-gray-400 transition duration-300"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/balthazarx" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mx-6 text-3xl hover:text-gray-400 transition duration-300"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

// About Me Component (Centered Profile Picture and Adjusted Layout)
const About = () => {
  return (
    <section className="bg-white text-black min-h-screen pt-32 px-6 text-center">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img 
          src={profileImage} // Image imported from src/assets/Me.jpg
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

// Contact Form Component (Modern and Spacious Form)
const Contact = () => {
  return (
    <section className="max-w-5xl mx-auto p-12 bg-white rounded-md shadow-2xl">
      <h2 className="text-3xl font-semibold mb-8 text-center text-black">Contact</h2>
      <form action="#" method="POST" className="space-y-6">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full sm:w-[600px] p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full sm:w-[600px] p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full sm:w-[600px] p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

// Resume Component (Elegant Resume Section with Black and White Theme)
const Resume = () => {
  return (
    <section className="bg-white p-12 rounded-md shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-black">Resume</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        You can view my resume or download it here:
        <a 
          href="https://docs.google.com/document/d/1zr9TVR89iafJF83Ob1Xu8tcWCREcQHcBQHSwDZUgKmM/edit?usp=sharing"  // Correct path to the PDF in the public folder
          className="text-black hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </p>
    </section>
  );
};

// Portfolio Component (Black and White Modern Styling for Languages)
const Portfolio = () => {
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby"
  ];

  return (
    <section className="bg-white min-h-screen p-12">
      <h2 className="text-3xl font-semibold mb-12 text-center text-black">Languages to Learn</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {languages.map((language, index) => (
          <div key={index} className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 border border-black">
            <h3 className="text-2xl font-semibold mb-6 text-center text-black">{language}</h3>
            <p className="text-lg text-gray-700 text-center">
              Start your journey with {language} and enhance your coding skills!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main App Component (Black and White Design)
const App = () => {
  return (
    <Router>
      <div className="bg-white text-black min-h-screen font-sans flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow pt-20 px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />  {/* Portfolio page for languages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
