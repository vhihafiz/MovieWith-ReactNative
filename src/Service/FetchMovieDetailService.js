import {API_KEY, API_URL} from '../utils/Constant'

export const fetchMovieDetailService = async (movieId) => {
    try {
        const response = await fetch(`${API_URL}/movie/${movieId}?language=en-US`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              Accept: 'application/json',
            },
          })
          const data = await response.json();
    return data;
    } catch (error) {
        throw error;
    }
}

export const fetchReviewService = async (movieId) => {
    try {
        const response = await fetch(`${API_URL}/movie/${movieId}/reviews?language=en-US&page=1`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              Accept: 'application/json',
            },
          })
          const data = await response.json();
    return data.results;
    } catch (error) {
        throw error;
    }
}

export const handleLoadMoreService = async (movieId, nextPage) => {
    try {
        const response = await fetch(`${API_URL}/movie/${movieId}/reviews?language=en-US&page=1&page=${nextPage}`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              Accept: 'application/json',
            },
          })
          const data = await response.json();
         return data.results;
    } catch (error) {
        throw error;
    }
}