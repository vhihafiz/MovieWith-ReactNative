import { API_KEY, API_URL } from "../utils/Constant";

export const fetchGenreService = async () => {
    try {
        const response = await fetch(`${API_URL}/genre/movie/list?language=en`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                Accept: 'application/json',
            },
        });

        const data = await response.json();
        // console.log(data);
        return data.genres;
    } catch (error) {
        throw error;
    }
};