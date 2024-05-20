import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <Header />
      <main className="p-4">
        <SearchBox onSearch={handleSearch} />
      </main>
    </>
  );
}

export default App;
