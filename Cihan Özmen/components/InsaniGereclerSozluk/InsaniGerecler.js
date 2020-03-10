import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ButtonProps,
  TouchableOpacity
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

class InsaniGerecler extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>
            İnsani Gereçler Sözlüğü
          </Text>
        </View>
        <View style={styles.iconBox}>
          <View>
            <TouchableOpacity>
              <FontAwesome name="hospital-o" size={85} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome name="plane" size={85} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome name="money" size={85} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <MaterialCommunityIcons name="food-fork-drink" size={85} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonBox}>
          <Button title="Geri" />
          <Button title="Çeviri" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  textBox: {
    paddingTop: 150,
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconBox: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  buttonBox: {
    paddingVertical: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  }
});

export default InsaniGerecler;
