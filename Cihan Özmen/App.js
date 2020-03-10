import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InsaniGerecler from "./components/InsaniGereclerSozluk/InsaniGerecler";
import Airport from "./components/InsaniGereclerSozluk/Airport";
export default function App() {
  return (
    <View>
      <Airport />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center" 
  }
});
