import Container from "./components/Container"

function App() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-t from-gray-600 to-gray-800 flex justify-center items-center">
      {/* Outer wrapper for margin and border */}
      <div className="w-[90%] h-[90%] border-2 border-white rounded-lg p-4 flex">
        {/* Left Section */}
        <div className="w-1/2 border-r border-white flex items-center justify-center">
          {/* Placeholder content for the left section */}
          <h2 className="text-white text-2xl">Left Section (Blank)</h2>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-4">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;
