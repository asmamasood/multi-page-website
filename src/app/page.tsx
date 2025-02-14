import Image from "next/image";

export default function Home() {
  return ( <>
  
      <main className="pt-20 bg-purple-400 min-h-screen ">
        <section className="text-center py-16  shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Barka Decor</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto ">
            Discover amazing ideas and inspirations to beautify your home with our expert Barka decoration tips.
          </p>
        </section>
        <section className=" mx-auto py-16 px-6 bg-purple-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Featured Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/smlr.png" alt="Design 1" className="object-cover rounded-md" width={700} height={250} />
              <h3 className="text-xl font-semibold mt-4">Modern Living Room</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/sb.png" alt="Design 2" className="w-full  object-cover rounded-md"width={200} height={250} />
              <h3 className="text-xl font-semibold mt-4">Minimalist Bedroom</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/sk.png" alt="Design 3" className="w-full  object-cover rounded-md"width={200} height={250} />
              <h3 className="text-xl font-semibold mt-4">Cozy Kitchen Setup</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};



