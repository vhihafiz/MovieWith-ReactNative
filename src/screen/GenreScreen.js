import { Text, View, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { fetchGenresService } from '../service/FetchGenreService'
import { stylesTheme } from "../theme/Index";


const GenreScreen = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetchGenresData();
    }, [])

    const fetchGenresData = async () => {
        try {
            const data = await fetchGenresService();
            setGenres(data);

        } catch (error) {
            console.error('Fetch failed', error)
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

    return (
        <View className="flex-1 bg-neutral-800">
            <View className="items-center">
                <View className="flex-row justify-between items-center mx-4">
                    <Text className="text-white text-3xl font-bold mt-8">
                        <Text style={stylesTheme.text}>List of Genre</Text>
                    </Text>

                </View>
                <View className="mt-10">
                    <FlatList
                        data={genres}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns}
                        renderItem={({ item }) => (
                            <View style={stylesTheme.genreItem}>
                                <Text style={stylesTheme.genreText}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>

    );

}

export default GenreScreen;