import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {Baslik} from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class InsaniGerecler extends Component {
  render() {
    return (
      <View>
        <Baslik name="İnsani Gereçler Sözlüğü" />
        <View
          style={{
            paddingVertical: 50,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity>
            <Icon name="hospital-o" size={85} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="plane" size={85} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="money" size={85} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="food-fork-drink" size={85} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 155,
            marginLeft: 255,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 4,
              width: 100,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25}}>Çeviri</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InsaniGerecler;
