import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FetchMoviesService } from "../Service/FetchMovieService";
import { API_IMAGE_URI } from "../utils/Constant";
import Loading from "../components/Loading";
import { ChevronLeftIcon } from "react-native-heroicons/outline";


const MovieScreen = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        fetchMoviesData()
    }, []);

    const fetchMoviesData = async () => {
        try {
            const data = await FetchMoviesService();
            setMovies(data);
            setLoading(false);

        } catch (error) {
            console.error(`Can't fetch movies`, error);
            setLoading(false);
        }
    };

    const handleMovieDetail = (id) => {
        navigation.navigate('MovieDetail', { movieId: id });
    };

    const renderItem = ({ item }) => (

        <View style={styles.movieItem}>
            <Image
                source={{ uri: `${API_IMAGE_URI}/t/p/w500/${item.poster_path}` }}
                style={styles.posterImage} className="mt-5"
            />
            <View style={styles.movieInfo}>
                <Text style={styles.movieTitle} className="text-white">{item.title}</Text>
                <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => handleMovieDetail(item.id)}
                >
                    <Text style={styles.detailButtonText}>Detail</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

    return loading ?
        <Loading />
        : (
            <View style={styles.container}>
                <FlatList
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.movieList}
                />

                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-5"}>
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                </SafeAreaView>

            </View>

            // Back Button

        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27272A',
    },
    movieList: {
        padding: 16,
    },
    movieItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    posterImage: {
        width: 100,
        height: 140,
        marginRight: 12,
    },
    movieInfo: {
        flex: 1,
    },
    movieTitle: {
        fontSize: 16,
    },
    detailButton: {
        marginTop: 8,
        backgroundColor: '#007BFF',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    detailButtonText: {
        color: '#fff',
    },
});

export default MovieScreen;



