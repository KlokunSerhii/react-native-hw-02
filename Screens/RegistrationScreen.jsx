import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const initialState = {
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
    <View style={{ ...styles.form, marginBottom: isShowKey ? 20 : 150 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Please enter your registration details</Text>
      </View>

      <View>
        <Text style={styles.text}>EMAIL</Text>
        <TextInput
          style={styles.input}
          textAlign={"center"}
          value={state.login}
          onFocus={() => setIsShowKey(true)}
          onChangeText={(value) =>
            setState((prev) => ({ ...prev, login: value }))
          }
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>LOGIN</Text>
        <TextInput
          style={styles.input}
          textAlign={"center"}
          value={state.login}
          onFocus={() => setIsShowKey(true)}
          onChangeText={(value) =>
            setState((prev) => ({ ...prev, login: value }))
          }
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          textAlign={"center"}
          value={state.password}
          secureTextEntry={true}
          onFocus={() => setIsShowKey(true)}
          onChangeText={(value) =>
            setState((prev) => ({ ...prev, password: value }))
          }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={hendlerPress}>
        <Text style={styles.buttonText}>REGISTR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
  },
  header: {
    marginBottom: 40,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    color: "#F0FFF0",
  },
  text: {
    marginBottom: 10,
    color: "#F0FFF0",
    fontSize: 20,
    fontWeight: 500,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#F0FFF0",
    borderRadius: 10,
    padding: 10,
    color: "#F0FFF0",
    fontSize: 15,
  },
  button: {
    marginHorizontal: 30,
    marginTop: 40,
    height: 40,
    borderRadius: 10,
    borderColor: "#F0FFF0",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
  },
  buttonText: {
    color: "#F0FFF0",
    fontSize: 16,
  },
});

export default RegistrationScreen;
