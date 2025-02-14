import Image from "next/image";
const imageList = [
   {image: "/1.jpg"} , {image : "/2.jpg"}, {image: "/3.jpg"}, {image: "/4.jpg"},{image: "/5.jpg"}, {image: "/6.jpg"}, {image: "/7.jpg"} , {image: "/8.jpg"} ,{image: "/9.jpg"} ,{image: "/10.jpg"} ,{image: "/11.jpg"} , 
   {image: "/12.jpg"} , {image: "/13.jpg"} , {image: "/14.jpg"} , {image: "/15.jpg"} , {image:"/slr.png"}
  ];
const Gallery = () => {
  return (
    <>
      <main className=" min-h-screen">
        <section className="text-center py-16 bg-purple-400 shadow-lg">
          <h1 className="text-4xl font-bold mt-8 text-gray-800">Gallery</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our stunning collection of home decoration ideas and beautifully designed spaces.
          </p>
        </section>
        <section className="container mx-auto py-16 px-6 bg-purple-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1a">
            {imageList.map((image, index) => (
              <div key={index} className="bg-white w-full h-64 overflow-hidden p-4 border-4 border-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <Image src={image.image} alt="loading" className="object-cover rounded-md w-full h-fit" width={300} height={300} />
                
              </div>
            ))}
          </div>
           
        </section>
      </main>
    </>
  );
};

export default Gallery;
