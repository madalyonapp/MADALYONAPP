import React, { Component } from 'react';
import { View,Button, Text ,FlatList,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  FormLabel,FormInput} from 'react-native-elements';
export default class Help extends Component {
  render(){
      return(
        <View style={styles.container}>
       
      </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: '#2a75bb'
  }
});