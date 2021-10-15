import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImages = () => {
  const apiKey = "19974977-7de7da89e9a7910ce59988326";
  return axios.get(`/?q=nature&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=8`).then((response) => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
