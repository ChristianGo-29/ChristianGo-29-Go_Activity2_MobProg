import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      <Text style={{
        textAlign: "right",
        marginTop: 10,
        color: "red"}}
        onPress={() => navigation.navigate("Recovery")}>Forgot Password?</Text>
      <Button onPress={() => navigation.navigate("Home")}
        mode="contained" style={{ marginTop: 10 }}>
        Login
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back
      </Button>
      <Text style={{
        textAlign: "center",
        marginTop: 10,
        color: "brown"}}
        onPress={() => navigation.navigate("Register")}>Dont have an account?</Text>
    </View>
  );
}
