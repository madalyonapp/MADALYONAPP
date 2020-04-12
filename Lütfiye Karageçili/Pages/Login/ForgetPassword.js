import React, { Component } from 'react'
import { Text, View,Input,TouchableOpacity } from 'react-native'

export default class ForgetPassword extends Component {
    render() {
        return (
            <View>
                <Text style={styles.ForgetPassword}>ŞİFREMİ UNUTTUM </Text>
                    <Input
                     returnKeyType={"go"}
                     autoCapitalize="none"
                     placeholder="Name/Mail"
                     onSubmitEditing={() => this.passwordInput.focus()}
             />
            </View>
            <View style={styles.butonForget}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('LoginPage')}>
                        <Text style={styles.signUpText}>
                            Gönder 
                        </Text>
                </TouchableOpacity>
         </View>
        );
    }
}
const styles = StyleSheet.create(
    {
      butonForget:{
        backgroundColor:"#ff6600",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:'20%',
        marginVertical:'5%',
        paddingHorizontal:'5%',
        paddingVertical:'5%'
      },
      ForgetPasswordArea:{
        alignItems:'center',
  
      },
      ForgetPasswordJ: {
        color: 'white'
      },
      ForgetPasswordText: {
        paddingVertical:'10%',
        color:'white'
      },
      bottomtext:{
        color:'black'
      },
     text:{
       fontSize:13,
       color:'black',
       fontFamily:'serif'
     }
    }
  )