import HomeScreen from "../screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenreScreen from "../screen/GenreScreen";
import MovieScreen from "../screen/MovieScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Genre" options={{ headerShown: false }} component={GenreScreen} />
                <Stack.Screen name="Movie" options={{ headerShown: false }} component={MovieScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}