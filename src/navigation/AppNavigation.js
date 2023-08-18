import HomeScreen from "../screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenreScreen from "../screen/GenreScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={GenreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}