import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-white text-black min-h-screen font-sans flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow pt-20 px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
