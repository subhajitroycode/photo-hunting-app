import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import DisplayImages from "./components/DisplayImages";
import fetchImages from "./utils/fetchImage";

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (searchTerm) => {
    setImages([]);
    console.log("Searching for:", searchTerm);
    const data = await fetchImages(searchTerm);
    setImages((prev) => [...prev, data.results]);
  };

  // useEffect(() => {
  //   console.log("Images:", images);
  // }, [images]);

  return (
    <>
      <Header />
      <main className="p-4">
        <SearchBox onSearch={handleSearch} />
        {images.length > 0 && <DisplayImages images={images} />}
      </main>
    </>
  );
}

export default App;
