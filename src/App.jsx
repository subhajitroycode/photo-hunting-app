import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import DisplayImages from "./components/DisplayImages";
import fetchImages from "./utils/fetchImage";
import { TailSpin } from "react-loader-spinner";
import ToTopButton from "./components/ToTopButton";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;
    setPage(1);
    setImages([]);
    setLoading(true);
    fetchImages(searchTerm)
      .then((data) => {
        setImages(data.results);
        setLoading(false);
      })
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
      <DarkModeToggle />
      <main className="p-4">
        <SearchBox onSearch={(searchItem) => setSearchTerm(searchItem)} />
        {loading && (
          <div className="flex justify-center items-center">
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#EA580C"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {images.length > 0 && (
          <>
            <DisplayImages images={images} />
            <div className="flex justify-center mx-6">
              <button
                className="text-gray-500 text-base bg-gray-100 dark:bg-gray-700 rounded-lg py-4 w-full border-2 border-orange-400 hover:border-orange-500 hover:bg-orange-500 hover:text-white load-btn"
                id="load-btn"
                onClick={() => setPage(page + 1)}
              >
                Load more...
              </button>
            </div>
          </>
        )}
      </main>
      <ToTopButton />
    </>
  );
}

export default App;
