
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-bold">Logan Smith</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About Me</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-black text-white mt-10">
      <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl">
        <FaLinkedin />
      </a>
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl">
        <FaGithub />
      </a>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">
        <section id="about" className="mb-10">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-4">A brief introduction about your skills and experience.</p>
        </section>
        <section id="contact" className="mb-10">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4">Your email and any other contact information.</p>
        </section>
        <section id="resume">
          <h2 className="text-3xl font-semibold">Resume</h2>
          <p className="mt-4">Link to your resume or a downloadable PDF.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
