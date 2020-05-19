import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {
    render() {
        return (
            <View>
                 <Text style={styles.signUpText}>KAYIT EKRANI </Text>
                  <Input
                      returnKeyType={"next"}
                      autoCapitalize="none"
                      placeholder="Name"
                      onSubmitEditing={() => this.passwordInput.focus()}
                  />
                   <Input
                      returnKeyType={"next"}
                      autoCapitalize="none"
                      placeholder="surname"
                      onSubmitEditing={() => this.passwordInput.focus()}
                  />
                   <Input
                      returnKeyType={"next"}
                      autoCapitalize="none"
                      placeholder="e-mail"
                      onSubmitEditing={() => this.passwordInput.focus()}
                  />
                  <Input
                      returnKeyType={"next"}
                      secureTextEntry={true}
                      placeholder="Password"
                      inputRef={input => this.passwordInput = input}
                  />
                  <Input
                      returnKeyType={"go"}
                      secureTextEntry={true}
                      placeholder="Password again"
                      inputRef={input => this.passwordInput = input}
                  />
               
        </View>
        <View style={styles.signUpArea}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('InterfaceSection')}>
                    <Text style={styles.signUpText}>
                        Kaydol 
                    </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create(
    {
      butonSingUp:{
        backgroundColor:"#ff6600",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:'20%',
        marginVertical:'5%',
        paddingHorizontal:'5%',
        paddingVertical:'5%'
      },
      signUpArea:{
        alignItems:'center',
  
      },
      signUpJ: {
        color: 'white'
      },
      signUpText: {
        paddingVertical:'10%',
        color:'white'
      },
      bottomtext:{
        color:'black'
      },
      butonSingUp:{
        backgroundColor:"#ffa500",
        alignItems:"center",
        paddingHorizontal:'5%',
        paddingVertical:'5%'
      },
     text:{
       fontSize:13,
       color:'black',
       fontFamily:'serif'
     }
    }
  )
  
  