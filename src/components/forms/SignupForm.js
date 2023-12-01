import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Register</Text>
      <TextInput
        mode="outlined"
        placeholder="Name"
        label="Name"
        style={{ marginTop: 10 }}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        secureTextEntry={showPass}
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showRePass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10 }}
      />
     <Button
        onPress={() => navigation.navigate("Landing")}
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Register
      </Button>
      <Button
        onPress={() => navigation.navigate("Landing")}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back
      </Button>
      <Text style={{
        textAlign: "center",
        marginTop: 10,
        color: "#5919ab"}}
        onPress={() => navigation.navigate("Login")}>You have already an account?</Text>
    </View>
  );
}
