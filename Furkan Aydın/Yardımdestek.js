import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class Contact extends React.Component {
  handleSubmit() {
    alert('Bizimle iletişime geçtiğiniz için teşekkür ederiz.');
  }

  render() {
      //FormLabel, FormInput are all apart of react-native-elements which enhances the stuff that comes out of the box for react-native
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sorun mu var ? Bizimle iletişime geçin ! </Text>
        <FormLabel>İsim</FormLabel>
        <FormInput />
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Telefon</FormLabel>
        <FormInput />
        <Button
          title="Submit"
          style={styles.button}
          onPress={() => this.handleSubmit()}
          color = {'#2a75bb'}
        />
      </View>
    );
  }
}

export default Yardımdestek;

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