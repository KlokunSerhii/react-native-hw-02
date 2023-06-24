import { View, Text, StyleSheet } from "react-native";

function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
}
export default CreatePostsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
