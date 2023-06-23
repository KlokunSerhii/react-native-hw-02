import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import img from "../assets/image/Rectangle.png";

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
    if (state.login !== "" || state.password !== "") {
      Keyboard.dismiss();
      setState(initialState);
      setIsShowKey(false);
      return;
    }
    alert("No dat");
  };

  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={keybordHide}>
      <ImageBackground style={styles.img} source={img}>
        <View style={{ ...styles.form, marginBottom: isShowKey ? -240 : 0 }}>
          <View style={styles.img}>
            <Image source={img} />
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
                      keyboardType={"password"}
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
            onPress={() =>  {
              navigation.navigate("Post"),
              keybordHide}}
              >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.bottomText}
            onPress={() => navigation.navigate("Registration")}
            >
              <Text>Вже є акаунт?<Text>Увійти</Text> </Text>
            </TouchableOpacity>
        </View>
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
