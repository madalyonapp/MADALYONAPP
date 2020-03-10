import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Food extends Component {
  render() {
    return (
      <View style={styless.container}>
        <View style={styless.textBox}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>
            İnsani Gereçler Sözlüğü
          </Text>
        </View>
        <View style={{ padding: 20 }}>
          <MaterialCommunityIcons name="food-fork-drink" size={75} />
        </View>
        <View style={{ borderWidth: 5, height: 250 }}>
          <Text></Text>
        </View>
        <View
          style={{
            margin: 45,
            alignItems: "flex-end",
            flexDirection: "row"
          }}
        >
          <Button title={"Geri"} />
        </View>
      </View>
    );
  }
}

export default Food;

const styless = StyleSheet.create({
  container: {},
  textBox: {
    paddingTop: 150,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
