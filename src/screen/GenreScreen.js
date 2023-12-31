import { Text, View, FlatList, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { stylesTheme } from "../theme/Index";
import { fetchGenreService } from "../Service/FetchGenreService";
import Loading from "../components/Loading";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";




const GenreScreen = () => {
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState([]);
    const navigation = useNavigation();


    useEffect(() => {
        fetchGenresData();
    }, [])

    const fetchGenresData = async () => {
        try {
            const data = await fetchGenreService();
            setGenres(data);
            setLoading(false);

        } catch (error) {
            console.error('Fetch failed', error);
            setLoading(false);
        }
    }

    const numColumns = 2;
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / numColumns;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        genreItem: {
            width: itemWidth,
            padding: 8,
            marginBottom: 10,
        },
        genreText: {
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
        },
    });

    return loading ?
    <Loading/>
    : (
        // return (
        <View className="flex-1 bg-neutral-800">

        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-8"}>
             <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>
        </SafeAreaView>

            <View className="items-center">
                <View className="flex-row justify-between items-center mx-4">
                    <Text className="text-white text-3xl font-bold mt-8">
                        <Text style={styles.text}>List of Genre</Text>
                    </Text>

                </View>
                <View className="mt-10">
                    <FlatList
                        data={genres}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns}
                        renderItem={({ item }) => (
                            <View style={styles.genreItem}>
                                <Text style={styles.genreText}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>

        </View>

    );

}

export default GenreScreen;