import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PostsScreen from "./src/Screens/PostsScreen";
import RegistrationScreen from "./src/components/RegistrationScreen";
import LoginScreen from "./src/components/LoginScreen";
import img from "./src/image/img.jpg";
import { useState } from "react";

export default function App() {
  const [isShowKey, setIsShowKey] = useState(false);

  const keybordHide = () => {
    Keyboard.dismiss();
    setIsShowKey(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.img} source={img}>
          <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <LoginScreen
              isShowKey={isShowKey}
              setIsShowKey={setIsShowKey}
              keybordHide={keybordHide}
            />
            <RegistrationScreen
              isShowKey={isShowKey}
              setIsShowKey={setIsShowKey}
              keybordHide={keybordHide}
            />
            <PostsScreen />
          </KeyboardAvoidingView>

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
