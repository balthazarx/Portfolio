const Resume: React.FC = () => {
    return (
      <section className="bg-white p-12 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-black">Resume</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          You can view my resume or download it here:
          <a 
            href="https://docs.google.com/document/d/1zr9TVR89iafJF83Ob1Xu8tcWCREcQHcBQHSwDZUgKmM/edit?usp=sharing" 
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
  
  export default Resume;
  