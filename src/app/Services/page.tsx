export default function Services(){
    return(
        <>
              <main className="  min-h-screen">
                <section className="text-center py-16  bg-purple-400 shadow-lg">
                  <h1 className="text-4xl font-bold text-gray-800 mt-8">Our Services</h1>
                  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    We offer a range of home decoration services tailored to meet your needs and transform your space beautifully.
                  </p>
                </section>
                <section className="container mx-auto py-20 px-6 bg-purple-300">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Offer</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold">Interior Design Consultation</h3>
                      <p className="text-gray-600 mt-2">Personalized advice from our expert designers to enhance your home aesthetics.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold">Custom Furniture Selection</h3>
                      <p className="text-gray-600 mt-2">Helping you find the perfect furniture pieces to match your style.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold">Complete Home Makeover</h3>
                      <p className="text-gray-600 mt-2">A full-scale redesign to bring your dream home to life.</p>
                    </div>
                  </div>
                </section>
              </main>

        
        </>
    
)
}