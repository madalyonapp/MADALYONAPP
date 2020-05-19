import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import {Baslik} from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DictionaryPage extends Component {
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
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Hospital')}>
                <Icon name="hospital-o" size={85} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Airport')}>
                <Icon name="plane" size={85} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Money')}>
                <Icon name="money" size={85} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Food')}>
                <MaterialCommunityIcons name="food-fork-drink" size={85} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginVertical: 100,
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Ceviri')}
                style={{}}>
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
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Doviz')}
                style={{}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 4,
                    width: 100,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 25}}>Döviz</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        
        )
    }
}
