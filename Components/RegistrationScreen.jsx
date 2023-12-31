import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import img from "../assets/image/img-bg.png";
import foto from "../assets/image/Rectangle.png";
import { ImageBackground } from "react-native";

const initialState = {
  email: "",
  login: "",
  password: "",
};

function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKey, setIsShowKey] = useState(false);
  const navigation = useNavigation();

  const keybordHide = () => {
    Keyboard.dismiss();
    setIsShowKey(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground style={styles.imgBg} source={img}>
          <View style={{ ...styles.form, marginBottom: isShowKey ? -140 : 0 }}>
            <View style={styles.img}>
              <Image source={foto} />
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>Реєстрація</Text>
            </View>
            <View>
              <TextInput
                placeholderTextColor={"#BDBDBD"}
                placeholder={"Логін"}
                selectionColor={"#FF6C00"}
                style={styles.input}
                value={state.login}
                onFocus={() => setIsShowKey(true)}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, login: value }))
                }
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                placeholderTextColor={"#BDBDBD"}
                inputMode={"email"}
                keyboardType={"email-address"}
                placeholder={"Адреса електронної пошти"}
                selectionColor={"#FF6C00"}
                style={styles.input}
                value={state.email}
                onFocus={() => setIsShowKey(true)}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, email: value }))
                }
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                placeholderTextColor={"#BDBDBD"}
                placeholder={"••••••••••••"}
                style={styles.input}
                value={state.password}
                secureTextEntry={true}
                selectionColor={"#FF6C00"}
                onFocus={() => setIsShowKey(true)}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomText}
              onPress={() => navigation.navigate("Login")}
            >
              <Text>
                Вже є акаунт?<Text>Увійти</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  img: {
    position: "absolute",
    left: 128,
    bottom: 489,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  header: {
    marginTop: 92,
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    color: "#212121",
  },

  input: {
    marginHorizontal: 16,
    height: 40,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: 10,
    color: "#212121",
    fontSize: 15,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 43,
    marginBottom: 16,
    height: 51,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#FF6C00",
    backgroundColor: "#FF6C00",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
  },
  buttonText: {
    color: "#FfFFFf",
    fontSize: 16,
  },
  bottomText: {
    marginBottom: 111,
    alignItems: "center",
  },
});

export default RegistrationScreen;
