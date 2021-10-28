import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

async function fetchImages() {
  const apiKey = "19974977-7de7da89e9a7910ce59988326";
  try {
    const response = await axios.get(`/?q=nature&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=8`);
    const result = response.data.hits;
    return result;
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
