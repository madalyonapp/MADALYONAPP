import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet , TextInput, Image} from 'react-native';
import Axios from 'axios'
export default class SignUp extends Component {
  state = {
    username:'',
    name:'',
    surname:'',
    email:'',
    password:'',
  }
  
  _SignUp = (navigation) =>
  {
          if(this.state.username != '' && this.state.password != '' && this.state.name != '' && this.state.surname != '' && this.state.email)
          {
              Axios.get(`http://192.168.195.1:8088/api/Login/SignUp?incomingUsername=${this.state.username}&incomingName=${this.state.name}&incomingSurname=${this.state.surname}&incomingMail=${this.state.email}&incomingPassword=${this.state.password}`)
              .then(res => res.data)
              .then(res => {
                  if(res == (-1))
                  {
                    alert("Lütfen başka bir kullanıcı adı deneyin.");
                  }else if (res == (-2))
                  {
                    alert("Bu email adresi kullanılmakta. Lütfen başka bir email adresi deneyin.")
                  }
                  else{
                    navigation.navigate("InterfaceSection")
                  } 
              })
              .catch(err => { alert("Oops api çalışmadı..")})
          }
          else {
            alert("Boş alanları doldurun.")
          }
  }
  
  
  
  
  
  
  render() {
      let {navigation} = this.props;
        return (
          <View style={styles.container}>
            <View style={styles.containerheader} >
                    <Image
                      style = {styles.logo} 
                      source = {require('../../Foto/image2.png')}
                    />
                    <Text style={styles.headertext}>
                      Kaydol
                    </Text>
                </View>
              <View style={styles.containertop}>
                 <TextInput
                        placeholder= "Username"
                        returnKeyType={"next"}
                        placeholderTextColor="#ddd"
                        style= {styles.input}
                        value = {this.state.username}
                        onChangeText = {(text) => {this.setState({username:text})}}
                    />
                   <TextInput
                        placeholder= "Name"
                        returnKeyType={"next"}
                        placeholderTextColor="#ddd"
                        style= {styles.input}
                        value = {this.state.name}
                        onChangeText = {(text) => {this.setState({name:text})}}
                    />
                  <TextInput
                        placeholder= "Surname"
                        returnKeyType={"next"}
                        placeholderTextColor="#ddd"
                        style= {styles.input}
                        value = {this.state.surname}
                        onChangeText = {(text) => {this.setState({surname:text})}}
                    />
                  <TextInput
                        placeholder= "Email"
                        returnKeyType={"next"}
                        placeholderTextColor="#ddd"
                        style= {styles.input}
                        value = {this.state.email}
                        onChangeText = {(text) => {this.setState({email:text})}}
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
        </View>
        <View style={styles.containerbuttom}>
            <TouchableOpacity style={styles.SignUp}
                onPress={()=> { this._SignUp(navigation)}}>
                    <Text style={styles.butontext}>
                        Kaydol 
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=> navigation.pop()}>
                    <Text style={styles.signin}>
                        Giriş Yap
                    </Text>
            </TouchableOpacity>
        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create(
    {
      signin:{
        color:'white',
        marginTop:'5%'
      },
      containerheader:{
        flexDirection:'column',
        flex:5,
        alignItems:'center',

      },
      headertext:{
        marginTop:'10%',
        color: '#ff6600',
        textAlign:'center',
        fontSize:30,
        fontFamily: 'serif',
      },
      container:{
        flex:1,
        flexDirection:'column',
        backgroundColor: 'black',
      },
      containertop:{
        flex:4,
      },
      containerbuttom:{
        flex:3,
        alignItems:'center'
      },
      butontext:{
        textAlign:'center',
        fontSize:16,
      },
     input:{
          backgroundColor:'black',
          height: 40,
          paddingHorizontal:5,
          borderWidth: 2,
          borderRadius:10,
          borderColor:'#ffb833',
          color: 'white',
          marginVertical: 8,
          marginHorizontal:30,
          fontSize: 14,
          fontWeight :'600',
      },
      SignUp:{
        backgroundColor:"#ff6600",
        alignItems:"center",
        borderRadius:10,
        width:'35%',
        marginTop:'10%',
        paddingHorizontal:'5%',
        paddingVertical:'5%'
      },
      logo: {
        marginTop:'10%',
        alignItems:'center',
        width :'40%',
        height:'50%',
      },
    }
  )
  
  