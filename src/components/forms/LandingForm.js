import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LandingForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1, }}>
      <Text variant="displayMedium"
        style={{
          textAlign: "center",
          margin: 10,
          }}>CRG Store</Text>
      <Text style={{
        textAlign: "center",
        margin: 10,
        }}>The best online shop application</Text>
      <Button 
        onPress={() => navigation.navigate("Login")}
        icon="login" 
        mode="contained" 
        style={{ marginTop: 10 }}>
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Sign Up
      </Button>
    </View>
  );
}
