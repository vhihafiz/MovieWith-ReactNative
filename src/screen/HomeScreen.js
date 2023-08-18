import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { stylesTheme } from "../theme/Index";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {

  const navigator = useNavigation()

  return (
    <View className="flex-1 bg-neutral-800">
      {/* {search bar and logo} */}
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Text className="text-white text-3xl font-bold mt-10 items-center text-center">
            <Text style={stylesTheme.text}>Movi</Text>es
          </Text>
          <View className="mt-10 mr-5">
            <TouchableOpacity>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <View className="flex-1 gap-[24px] items-center justify-center ">
        <TouchableOpacity onPress={() => navigator.navigate("Genre")} className="border border-white p-2 rounded-lg">
          <Text className="text-2xl" style={stylesTheme.text}>Genre</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigator.navigate("Movie")} className="border border-white p-2 rounded-lg">
          <Text className="text-2xl" style={stylesTheme.text}>Movie List</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}


