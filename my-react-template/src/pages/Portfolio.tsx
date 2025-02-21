const Portfolio: React.FC = () => {
    const languages: string[] = ["JavaScript", "Python", "Java", "Ruby"];
  
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
  
  export default Portfolio;
  