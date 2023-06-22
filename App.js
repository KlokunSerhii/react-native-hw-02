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
import PostsScreen from "./Screens/PostsScreen";
import RegistrationScreen from "./Components/RegistrationScreen";
import LoginScreen from "./Components/LoginScreen";
import img from "./assets/image/img-bg.png";
import { useState } from "react";

export default function App() {
  const [isShowKey, setIsShowKey] = useState(false);

  const keybordHide = () => {
    Keyboard.dismiss();
    setIsShowKey(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={keybordHide}>
        <ImageBackground style={styles.img} source={img}>
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
        </ImageBackground>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
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
