import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY_TO_PIXABAY = '23172148-3d8451c08bf51f1732f14e58d';

async function fetchData(query, page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${KEY_TO_PIXABAY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { fetchData };
