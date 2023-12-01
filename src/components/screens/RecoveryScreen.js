import { View } from "react-native";
import React from "react";
import LoginForm from "../forms/RecoveryForm";

export default function RecoveryScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: 'lightblue',
      }}
    >
      <LoginForm {...props} />
    </View>
  );
}
