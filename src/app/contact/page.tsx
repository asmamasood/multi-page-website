export default function Contact() {
  return (
    <>
      
      <main className=" min-h-screen">
        <section className="text-center py-16 bg-purple-400 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mt-8">Contact Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or need help Reach out to us and we will be happy to assist you
          </p>
        </section>
        <section className="container mx-auto py-16 px-6 bg-purple-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <form className="bg-gray-200 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea className="w-full p-3 border rounded-lg" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
};


