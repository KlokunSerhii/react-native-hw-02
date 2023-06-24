import { View, Text, StyleSheet } from "react-native";

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  );
}
export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
