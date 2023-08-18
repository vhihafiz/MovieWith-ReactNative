import { useEffect, useState } from "react";
import { fetchMovieDetailService, fetchReviewService, handleLoadMoreService } from "../Service/FetchMovieDetailService";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { API_IMAGE_URI } from "../utils/Constant";
import Loading from "../components/Loading";


const MovieDetailScreen = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState(null);
  const [reviews, setReviews] = useState([]);
  const route = useRoute();
  const { movieId } = route.params;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    fetchDetailData()
  }, []);

  const fetchDetailData = async () => {
    try {
      const dataMovie = await fetchMovieDetailService(movieId);
      const dataReview = await fetchReviewService(movieId)
      setMovieDetail(dataMovie);
      setReviews(dataReview)
      setLoading(false);
    } catch (error) {
      console.error(`Can't fetch movie detail`, error);
      // setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (!isLoadingMore) {
      try {
        setIsLoadingMore(true);
        let nextPage = currentPage + 1;
        const data = await handleLoadMoreService(movieId, nextPage)
        setReviews((prevReviews) => [...prevReviews, ...data]);
        setCurrentPage(nextPage);
        setIsLoadingMore(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setIsLoadingMore(false);
      }
    }
  };

  return loading ?
    <Loading />
    : (
      <View style={styles.container}>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <Image
                source={{ uri: `${API_IMAGE_URI}/t/p/w500/${movieDetail.poster_path}` }}
                style={styles.posterImage}
              />
              <Text style={styles.movieTitle} className="text-orange-400">{movieDetail.title}</Text>
              <Text style={styles.movieOverview} className="text-white">{movieDetail.overview}</Text>

              <View style={styles.reviewItem} className="text-white">
                <Text style={styles.reviewAuthor} className="text-rose-300">{item.author}</Text>
                <Text style={styles.reviewContent} className="text-white">{item.content}</Text>
              </View>
            </>
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isLoadingMore ? <ActivityIndicator size="small" color="#000" /> : null}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27272A',
    padding: 16,
  },
  posterImage: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginBottom: 16,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 16,
    marginBottom: 16,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewItem: {
    marginBottom: 12,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewContent: {
    fontSize: 14,
  },
});

export default MovieDetailScreen;
