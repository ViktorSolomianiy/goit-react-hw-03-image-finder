import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '32253350-233c165c5f822b5f85a9694b5';
const IMAGES_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: IMAGES_PER_PAGE,
};

export const fetchImage = async (value, page) => {
  const config = {
    params: {
      q: value,
      page: page,
    },
  };
  const response = await axios.get('', config);
  return response.data;
};
