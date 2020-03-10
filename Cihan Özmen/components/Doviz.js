import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Picker
} from "react-native";

class Doviz extends Component {
  render() {
    return (
      <View style={styless.container}>
        <View style={styless.textBox}>
          <Text style={{ fontSize: 45, fontWeight: "bold" }}>Döviz</Text>
        </View>
        <View style={{ marginLeft: 15, marginTop: 400, flexDirection: "row" }}>
          <Button title="Geri" />
        </View>
      </View>
    );
  }
}

export default Doviz;

const styless = StyleSheet.create({
  container: {},
  textBox: {
    paddingTop: 125,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
