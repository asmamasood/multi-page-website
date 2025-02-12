import Image from "next/image";
const imageList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg", "6.jpg", "7.jpg" , "8.jpg" , "9.jpg" , "10.jpg" , "11.jpg" , 
    "12.jpg" , "13.jpg" , "14.jpg" , "15.jpg" , "slr.png"
  ];
const Gallery = () => {
  return (
    <>
      <main className="pt-20 bg-gray-100 min-h-screen">
        <section className="text-center py-16 bg-pink-300 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our stunning collection of home decoration ideas and beautifully designed spaces.
          </p>
        </section>
        <section className="container mx-auto py-16 px-6 bg-blue-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1a">
            {imageList.map((image, index) => (
              <div key={index} className="bg-white p-4 border-4 border-gray-300 rounded-lg shadow-md">
                <Image src={`/image${image}`} alt={image} className="object-cover rounded-md" width={300} height={300} />
              </div>
            ))}
          </div>
           
        </section>
      </main>
    </>
  );
};

export default Gallery;
