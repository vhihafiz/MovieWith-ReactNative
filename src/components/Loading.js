import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size={"large"} color="#F6635C"/>
        </View>
    )
}
const styles = StyleSheet.create({
    loading: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Loading;