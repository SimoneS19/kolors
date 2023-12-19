import axios from 'axios';

const useGPT = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y',
    },
    params: {
      query: term,
      per_page: 12,
    },
  });

  return response.data.results;
};

export default useGPT;