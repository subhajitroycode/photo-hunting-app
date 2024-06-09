import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import DisplayImages from "./components/DisplayImages";
import fetchImages from "./utils/fetchImage";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchTerm) return;
    setPage(1);
    setImages([]);
    fetchImages(searchTerm)
      .then((data) => setImages(data.results))
      .catch((err) => console.log(err));
  }, [searchTerm]);

  useEffect(() => {
    if (page === 1) return;
    fetchImages(searchTerm, page)
      .then((data) => setImages((prev) => [...prev, ...data.results]))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Header />
      <main className="p-4">
        <SearchBox onSearch={(searchItem) => setSearchTerm(searchItem)} />
        {images.length > 0 && (
          <>
            <DisplayImages images={images} />
            <div className="flex justify-center">
              <button
                className="bg-orange-600 text-white rounded-lg px-4 py-2"
                onClick={() => setPage(page + 1)}
              >
                Load more...
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
