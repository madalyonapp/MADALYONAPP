import React, { Component } from 'react'
import {Text, View,StyleSheet,TextInput,ScrollView} from 'react-native'
import { Card, Button,CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from '../Store/Login';
import Update from '../Store/Update';
import TravelQuestion from '../Store/TravelQuestion'
export default class SettingPage extends Component {
  state={
    checked1:false,
    checked2:false,
    inname:"",
    innickname:"",
    insifre:"",
    incity:"",
    intravelchoise:"",
    inhobby:"",
    inreadchoise:"",
  }
  updatehesap(){
    Update.insifre=this.state.insifre;
    Update.nickname=this.state.innickname;
    Update.Updatehesap();
  }
  updatebilgiler(){
    Update.name = this.state.name;
    Update.city = this.state.city;
    Update.travelchoise = this.state.intravelchoise;
    Update.readchoise = this.state.inreadchoise;
    Update.hobby = this.state.inhobby;
    Update.UpdateBilgiler();
  }
 componentDidMount=()=>{
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
  Login._Library();
  Login._readchoise();
  Login._contactemail();
  TravelQuestion._travelquestion();
  TravelQuestion._user();
  TravelQuestion._readquestions();
 }
    render() {
      let {navigation} = this.props;
        return (
          <View style={styles.view}>
          <ScrollView>
          <View style={styles.asbody}>
            
          <Card title="Hesap">
          <View style={{
                flexDirection:'column', marginTop:2
              }}>
              <Text>Kullanıcı Adı : </Text>
              
              <TextInput
                placeholder={Login.nickname}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.innickname}
                        onChangeText = {(text) => {this.setState({innickname:text})}}
                
                />
                </View>
                <View style={{
                flexDirection:'column', marginTop:2
                          }}>
              <Text>Şifre : </Text>
              
              <TextInput
                placeholder="Yeni şifre girin..."
                secureTextEntry={true}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.insifre}
                        onChangeText = {(text) => {this.setState({insifre:text})}}
                />
                </View>
      <TouchableOpacity
      onPress={()=>{this.updatehesap()}}
      >
      <Icon name="save" size={25} color="#00A7FF" style={{alignSelf: 'flex-end', marginTop:5}}/>
      </TouchableOpacity>
      </Card>
            <Card title="Kişisel Bilgiler">
              <View style={{
                flexDirection:'column', marginTop:2
              }}>
              <Text>İsim : </Text>
              
              <TextInput
                placeholder={Login.name}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.inname}
                        onChangeText = {(text) => {this.setState({inname:text})}}
                />
                </View>
                <View style={{
                flexDirection:'column', marginTop:2
                          }}>
              <Text>Şehir : </Text>
              
              <TextInput
                placeholder={Login.city}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.incity}
                        onChangeText = {(text) => {this.setState({incity:text})}}
                />
                </View>
                <View style={{
                flexDirection:'column', marginTop:2
              }}>
              <Text>Gezi Tercihi : </Text>
              
              <TextInput
                placeholder={Login.travelchoise}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.intravelchoise}
                        onChangeText = {(text) => {this.setState({intravelchoise:text})}}
                />
                </View>
                <View style={{
                flexDirection:'column', marginTop:2
              }}>
              <Text>Kitap Tercihi : </Text>
              
              <TextInput
                placeholder={Login.readchoise}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.inreadchoise}
                        onChangeText = {(text) => {this.setState({inreadchoise:text})}}
                />
                </View>
                <View style={{
                flexDirection:'column', marginTop:2
              }}>
              <Text>Hobiler : </Text>
              
              <TextInput
                placeholder={Login.hobby}
                style={{
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 0,
                  height: 'auto',
                  borderColor: '#e67300',
                  flex:1,
                  width:'auto'
                }}
                value = {this.state.inhobby}
                        onChangeText = {(text) => {this.setState({inhobby:text})}}
                />
                </View>
                <TouchableOpacity
                onPress={()=>{this.updatebilgiler()}}
                >
                <Icon name="save" size={25} color="#00A7FF" style={{alignSelf: 'flex-end', marginTop:5}}/>
                </TouchableOpacity>
            </Card>
            <Card title="Gizlilik">
            <View style={{
                flexDirection:'row'
              }}>
              <Text style={{width:'70%'}}>E-posta diğer kullanıcılar tarafından görüntülensin mi?</Text>
              <CheckBox
                title='Evet'
                checked={this.state.checked1}
                onPress={() => this.setState({checked1: !this.state.checked1})}
              />
              </View>
            <View style={{
                flexDirection:'row',
                marginTop:'5%'
              }}>
              <Text style={{width:'70%'}}>Telefon numarası diğer kullanıcılar tarafından görüntülensin mi?</Text>
              <CheckBox
                title='Evet'
                checked={this.state.checked2}
                onPress={() => this.setState({checked2: !this.state.checked2})}
              />
              </View> 
            </Card>
             
          </View>
          </ScrollView>
        </View>
        
        )
    }
}
const styles = StyleSheet.create({
  
  view:{
    backgroundColor:'#f2f2f2',
   
  },
  buton:{
    flexDirection:'row',
    marginHorizontal:'10%',
    marginVertical:'10%',
    alignItems:'center',
  }
 
  
});
