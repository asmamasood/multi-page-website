const NotFound = () => {
    return (
      <main className="flex items-center justify-center min-h-screen bg-pink-100">
        <div className="text-center bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
          <a href="/" className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Go Home</a>
        </div>
      </main>
    );
  };
  
  export default NotFound;