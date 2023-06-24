import { View, Text, StyleSheet } from "react-native";

function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
    </View>
  );
}
export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
});
