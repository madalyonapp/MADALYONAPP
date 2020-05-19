import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import Input from './Input';
import InterfaceSectionPage from '../InterfaceSectionPage'
import ForgetPassword from './ForgetPassword'
import SignUp from './SignUp'
import CurrencyPage from '../CurrencyPage'
import DictionaryPage from '../DictionaryPage'
import LoginBody from './LoginBody';
import Setting from '.././Setting'
import Money from '../Money'
import Airport from '../Airport'
import Food from '../Food'
import Hospital from '../Hospital'
import Translate from '../Translate'
  const  navigationOptionHandler = () => ({
    headerShown: false,animationEnabled:false
  })
  const Stack = createStackNavigator();
  export default class LoginPage extends Component { 
    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginBody" headerMode="none"> 
            <Stack.Screen name="LoginBody" component={LoginBody} />
            <Stack.Screen name="InterfaceSection" component={InterfaceSectionPage} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Currency" component={CurrencyPage} />
            <Stack.Screen name="Dictionary" component={DictionaryPage} />
            <Stack.Screen name="Airport" component={Airport} />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="Hospital" component={Hospital} />
            <Stack.Screen name="Money" component={Money} />
            <Stack.Screen name="Translate" component={Translate} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }
  
  const styles = StyleSheet.create({})


