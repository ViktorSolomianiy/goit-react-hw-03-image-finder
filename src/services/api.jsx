import axios from 'axios';

const BASE_URl = 'https://pixabay.com/api';
const KEY = '32253350-233c165c5f822b5f85a9694b5';

export const fetchImage = async (value, page) => {
  const response = await axios.get(
    `${BASE_URl}/?key=${KEY}&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
