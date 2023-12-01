import { View } from "react-native";
import React from "react";
import HomeForm from "../forms/HomeForm";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: 'lightblue',
      }}
    >
      <HomeForm {...props} />
    </View>
  );
}
