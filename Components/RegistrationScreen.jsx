import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import img from "../assets/image/Rectangle.png";

const initialState = {
  email: "",
  login: "",
  password: "",
};

function RegistrationScreen({ isShowKey, setIsShowKey, keybordHide }) {
  const [state, setState] = useState(initialState);
  const hendlerPress = () => {
    if (state.login !== "" || state.password !== "") {
      keybordHide();
      setState(initialState);
      console.log(state);
      return;
    }
    alert("No data");
  };
  return (
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

      <TouchableOpacity style={styles.button} onPress={hendlerPress}>
        <Text style={styles.buttonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
