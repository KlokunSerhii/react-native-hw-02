import { View, Text, StyleSheet } from "react-native";
function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
}

export default PostsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
