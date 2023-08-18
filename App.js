import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/screen/navigation/AppNavigation';

export default function App() {
  return (
    <AppNavigation></AppNavigation>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// className="text-white text-2xl "
//  content: ["App.{js,jsx,ts,tsx}
// plugins :["nativewind/babel"],