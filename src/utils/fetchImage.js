const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchImages = async (searchTerm) => {
  try {
    const response = await fetch(
      `${API_URL}?query=${searchTerm}&client_id=${API_KEY}&page=1&per_page=12`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchImages;
