const Loading = () => {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Loading...</h2>
        </div>
      </main>
    );
  };
  
  export default Loading;