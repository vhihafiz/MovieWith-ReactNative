import {API_KEY, API_URL} from "../utils/Constant"

export const FetchMoviesService = async () => {

    try {
        const response = await fetch(`${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: 'application/json',
            },
        })

        const data = await response.json();
        return data.results;
    }
    catch (error) {
        throw error;
    }
}