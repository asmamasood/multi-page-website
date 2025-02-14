export default function About() {
    return (
    <>
      
      <main className=" min-h-screen">
        <section className="text-center py-16 bg-purple-400 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mt-8">About Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At BarkaDecor we are passionate about transforming spaces into stunning and comfortable environments.
             Our team of experts brings you the best home decoration ideas and inspiration.
          </p>
        </section>
        <section className="container mx-auto py-16 px-6 bg-purple-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to provide top notch interior design ideas and resources to help you create a home
             that reflects your personality and style. Whether you love modern aesthetics or vintage charm
              we have something for everyone.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Expert home decoration tips</li>
            <li>High-quality design inspirations</li>
            <li>Customized solutions for every space</li>
            <li>Affordable and stylish Barka decor ideas</li>
          </ul>
        </section>
      </main>
    </>
  );
};

