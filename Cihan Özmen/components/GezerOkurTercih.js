import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityComponent
} from "react-native";

class GezerOkurTercih extends Component {
  gezenAnaSayfa = () => {
    //alert("work");
  };
  okurAnaSayfa = () => {
    //alert("Workk");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.text}>Hoşgeldiniz Kullanıcı_adi</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <TouchableOpacity
              style={styles.gezenBox}
              onPress={this.gezenAnaSayfa}
            >
              <Text style={{ fontSize: 35, color: "gray" }}>Gezen</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.okurBox}
              onPress={this.okurAnaSayfa}
            >
              <Text style={{ fontSize: 35, color: "white" }}>Okur</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textBox: {
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    elevation: 10,
    justifyContent: "space-around"
  },
  text: {
    fontSize: 35
  },
  gezenBox: {
    borderWidth: 5,
    borderRightWidth: 3,
    alignItems: "center",
    justifyContent: "space-around",
    height: 500,
    width: 205,
    backgroundColor: "white",
    elevation: 5
  },
  okurBox: {
    borderWidth: 5,
    borderLeftWidth: 3,
    alignItems: "center",
    justifyContent: "space-around",
    height: 500,
    width: 215,
    backgroundColor: "gray",
    elevation: 5
  }
});

export default GezerOkurTercih;
