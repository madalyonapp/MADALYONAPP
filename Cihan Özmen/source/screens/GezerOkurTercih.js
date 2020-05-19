import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Baslik} from '../components/header';

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
        <Baslik name="Hoşgeldin kullanici_adi" />
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              style={styles.gezenBox}
              onPress={this.gezenAnaSayfa}>
              <Text style={{fontSize: 35, color: 'gray'}}>Gezen</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.okurBox}
              onPress={this.okurAnaSayfa}>
              <Text style={{fontSize: 35, color: 'white'}}>Okur</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gezenBox: {
    borderWidth: 5,
    borderRightWidth: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 520,
    width: 205,
    backgroundColor: 'white',
    elevation: 5,
  },
  okurBox: {
    borderWidth: 5,
    borderLeftWidth: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 520,
    width: 215,
    backgroundColor: 'gray',
    elevation: 5,
  },
});

export default GezerOkurTercih;
