const Contact: React.FC = () => {
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
  
  export default Contact;
  