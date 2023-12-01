import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function HomeForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium"
        style={{
          textAlign: "center",
          margin: 10,
          }}>Yehey!</Text>
      <Text style={{
        textAlign: "center",
        margin: 10,
        }}>You reach right we start editing this code.</Text>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Logout
      </Button>
    </View>
  );
}
