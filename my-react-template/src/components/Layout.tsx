import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow pt-20 px-6 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
