import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const initialState = {
  login: "",
  password: "",
};

function LoginScreen({ isShowKey, setIsShowKey, keybordHide }) {
  const [state, setState] = useState(initialState);
  const hendlerPress = () => {
    if (state.login !== "" || state.password !== "") {
      keybordHide();
      setState(initialState);
      console.log(state);
      return;
    }
    alert("Enter LOGIN & PASSWORD");
  };
  return (
    <View style={{ ...styles.form, marginBottom: isShowKey ? -230 : 0 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Увійти</Text>
      </View>
      <View>
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
        <Text style={styles.buttonText}>Увійти</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text>Немає акаунту? Зареєструватися</Text>
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
  header: {
    marginTop: 32,
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

export default LoginScreen;
