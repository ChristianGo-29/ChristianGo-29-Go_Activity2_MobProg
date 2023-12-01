import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RecoveryForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium">Account Recovery</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <Button mode="contained" style={{ marginTop: 10 }}>
        Send Authentication Code
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Go Back
      </Button>
    </View>
  );
}
