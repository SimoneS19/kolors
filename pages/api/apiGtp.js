import axios from "axios";

const apiGtp = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {       //1
        headers: {
            Authorization: 'Client-ID olZ7p-7hBZ8HKmYRNx0IDKjHY9LkgGVG4qK_Qw1UpOg',
        },
        params: {
            query: term,
            per_page: 18
        }
    });

    return response.data.results;
};

export default apiGtp;