import React, { Component } from 'react';
import { Text, StyleSheet, View , Image,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Axios from 'axios'
import {observer} from 'mobx-react'
import Login from '../../Store/Login'
import TravelQuestion from '../../Store/TravelQuestion';
import MapStore from '../../Store/MapStore';

@observer
export default class LoginBody extends Component {
    state = {
        username:'',
        password:'',
    }
    _Login = (navigation) =>
    {
            if(this.state.username != '' && this.state.password != '')
            {
                Axios.get(`http://192.168.195.1:8088/api/Login/SignIn?incomingUsername=${this.state.username}&incomingPassword=${this.state.password}`)
                .then(res => res.data)
                .then(res => {
                    if(res != -1)
                    {
                        Login.id = res;
                        Login._dataread();
                        Login._datatravel()
                        Login._TravelCity();
                        Login._Photo();
                        Login._city();
                        Login._contactno();
                        Login._countravel();
                        Login._hobby();
                        Login._name();
                        Login._nickname();
                        Login._reliability();
                        Login._travelchoise();
                        Login._ReadAnswersCount();
                        Login._TravelAnswersCount();
                        Login._Library();
                        Login._readchoise();
                        Login._contactemail();
                        TravelQuestion._travelquestion();
                        TravelQuestion._user();
                        TravelQuestion._readquestions();
                     
                        navigation.navigate("InterfaceSection")
                    }else
                    {
                      alert("Kullanıcı adı veya şifre bulunamadı.")
                    } 
                })
                .catch(err => { alert("Oops api çalışmadı..")})
            }
            else {
              alert("Kullanıcı adı veya şifre boş geçilemez.")
            }
    }
    render() { 

        let {navigation} = this.props;
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
                  <TextInput
                        placeholder= "Username"
                        returnKeyType={"next"}
                        placeholderTextColor="#ddd"
                        style= {styles.input}
                        value = {this.state.username}
                        onChangeText = {(text) => {this.setState({username:text})}}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder= "Password"
                        returnKeyType={"go"}
                        placeholderTextColor="#ddd"
                        style= {styles.input}
                        value = {this.state.password}
                        onChangeText = {(text) => {this.setState({password:text})}}
                    />
                            <TouchableOpacity 
                            onPress={()=> { navigation.navigate('ForgetPassword')} }>
                            <Text style = {styles.text}>
                               Şifemi Unuttum ?
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.butonSingIn}
                            onPress={()=> { this._Login(navigation)}}>
                            <Text style = {styles.test}>
                                Giriş Yap
                            </Text>
                          </TouchableOpacity>
                    </View>
                </View>
              <View style={styles.signUpArea}>
                <TouchableOpacity
                onPress={()=> { navigation.navigate('SignUp')}}>
                  <Text style={styles.signUpText}>
                   Kaydol 
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.bottomView}>
          <View style={{flex:2}}>
          <TouchableOpacity style={styles.butonSingUp}
          onPress={()=> {navigation.navigate('Currency')} }>
                  <Text style={styles.bottomtext}>
                    Döviz Kurları
                  </Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:2}}>
          <TouchableOpacity style={styles.butonSingUp}
          onPress={()=> {navigation.navigate('Translate')} }>
                  <Text style={styles.bottomtext}>
                    Çeviri
                  </Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:2}}>
          <TouchableOpacity style={styles.butonSingUp}
          onPress={()=>  { navigation.navigate('Dictionary')}}>
                  <Text style={styles.bottomtext}>
                    İnsani Gereçler Sözlüğü
                  </Text>
          </TouchableOpacity>
          </View>
          </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    butonSingIn:{
        backgroundColor:"#ff6600",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:'20%',
        marginVertical:'10%',
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
     },
     input:{
        height: 40,
        paddingHorizontal:5,
        borderWidth: 2,
        borderRadius:10,
        borderColor:'#ffb833',
        color: 'black',
        marginBottom: 8,
        fontSize: 14,
        fontWeight :'600',
    }
})
