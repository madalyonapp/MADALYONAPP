import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Input from './Input';
import InterfaceSectionPage from '../InterfaceSectionPage'
import ForgetPasswordPage from './ForgetPassword'
import SignUpPage from './SignUp'
import CurrencyPage from '../CurrencyPage'
import DictionaryPage from '../DictionaryPage'
import GuestLogin from '../GuestLogin'

function InterfaceSection(){
  return(
    <InterfaceSectionPage/>
  )
}
function GuestLogin(){
  return(
    <GuestLogin/>
  )
}
function ForgetPassword(){
  return(
    <ForgetPasswordPage/>
  )
}
function SignUp(){
  return(
    <SignUpPage/>
  )
}
function Currency(){
  return(
    <CurrencyPage/>
  )
}
function Dictionary(){
  return(
    <DictionaryPage/>
  )
}
function LoginBody({navigation}){
    return (
      <View style = {styles.container}>
        <View style = {styles.containerorta}>
          <Image
            style = {styles.logo} 
            source = {require('../../Foto/image2.png')}
          />
          <Text style={styles.headderlogo}>
            MADALYON
          </Text>
        </View>
        <View style = {styles.containeralt}>
            <View style= {styles.loginpages}>
              <Text style = {styles.test}>
                Hoşgeldin
              </Text>
              <View style={{marginTop:'10%'}}>
                        <Input 
                          placeholder= "Username"
                          returnKeyType={"next"}
                          onSubmitEditing = {()=>this.passwordInput.focus()}
                        />
                        <Input
                          secureTextEntry={true}
                          placeholder= "Password"
                          returnKeyType={"go"}
                        />
                        <TouchableOpacity 
                        onPress={()=> navigation.navigate('ForgetPassword')}>
                        <Text style = {styles.text}>
                           Şifemi Unuttum ?
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress={()=> navigation.navigate('GuestLogin')}>
                        <Text style = {styles.text}>
                           Misafir Girişi
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.butonSingIn}
                        onPress={()=> navigation.navigate('InterfaceSection')}>
                        <Text style = {styles.test}>
                            Giriş Yap
                        </Text>
                      </TouchableOpacity>
                </View>
            </View>
          <View style={styles.signUpArea}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>
               Kaydol 
              </Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.bottomView}>
      <View style={{flex:2}}>
      <TouchableOpacity style={styles.butonSingUp}
      onPress={()=> navigation.navigate('Currency')}>
              <Text style={styles.bottomtext}>
                Döviz Kurları
              </Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:2}}>
      <TouchableOpacity style={styles.butonSingUp}
      onPress={()=> navigation.navigate('Dictionary')}>
              <Text style={styles.bottomtext}>
                İnsani Gereçler Sözlüğü
              </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    );
  }
  const  navigationOptionHandler = () => ({
    headerShown: false
  })
  const Stack = createStackNavigator();
  export default function LoginPage(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginBody"component={LoginBody} options={navigationOptionHandler}/>
          <Stack.Screen name="InterfaceSection" component={InterfaceSection} options={navigationOptionHandler}/>
          <Stack.Screen name="GuestLogin"component={GuestLogin} options={navigationOptionHandler}/>
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={navigationOptionHandler}/>
          <Stack.Screen name="SignUp" component={SignUp} options={navigationOptionHandler}/>
          <Stack.Screen name="Currency" component={Currency} options={navigationOptionHandler}/>
          <Stack.Screen name="Dictionary" component={Dictionary} options={navigationOptionHandler}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
  }

const styles = StyleSheet.create(
  {
    butonSingIn:{
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
    container: {
      flex:1,
      flexDirection:'column',
      backgroundColor: 'black',
    },
    containerorta: {
      alignItems:'center',
      flex:5,
      paddingVertical:'5%'
    },
    containeralt: {
      alignItems:'center',
      flex:10
    },
    logo: {
      marginTop:'10%',
      alignItems:'center',
      width :'25%',
      height:'50%',
    },
    headderlogo: {
      marginTop: '5%',
      color: '#ff6600',
      textAlign:'center',
      fontSize:30,
      fontFamily: 'serif'
    },
    loginpages: {
      width:'80%',
      height:'70%',
      backgroundColor: '#ffa500',
      borderRadius: 20,
      padding:'10%',
    },
    test: {
        fontSize: 15,
        textAlign:'center',
        color: 'black',
        fontFamily: 'serif'
        
    },
    bottomView:{
      flex:1.5,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#ffa500"
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

