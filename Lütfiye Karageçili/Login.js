import React, {Component} from 'react';
import {View, Modal, Text} from 'react-native';
import Form from '../components/Form';
import Wallpaper from '../components/Wallpaper';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import Styles from '../components/Styles';
import Uyari from '../components/Uyari';
import Button from '../components/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      checked: false,
      isRemember: false,
      selectedIndex: 0,
      uyariKullanıcıAdi: false,
      uyariBosAlanlar: false,
    };
    this.pressLogin = this.pressLogin.bind(this);
    this.setLoginData = this.setLoginData.bind(this);
    this.openApp = this.openApp.bind(this);
    this.uyariCallBack = this.uyariCallBack.bind(this);
    this.uyariBosAlanlarCallBack = this.uyariBosAlanlarCallBack.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.openForgotPassword = this.openForgotPassword.bind(this);
  }

  componentDidMount() {}

  async connectToFirebase(email, password, rememberMe) {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(credential => {
          if (credential) {
            console.log('Account is exist');
            this.openApp(rememberMe);
          }
        })
        .catch(error => console.log('asdad', error));
    } catch (error) {}
  }

  async saveData() {
    const {LoginData} = this.state;
    const {email, password, rememberMe} = LoginData;
    await AsyncStorage.setItem('@email', email);
    await AsyncStorage.setItem('@password', password);
    await AsyncStorage.setItem('@rememberMe', rememberMe);
  }

  openApp(rememberMe) {
    if (rememberMe) {
      this.saveData();
    }
    this.props.navigation.navigate('CommunityStack');
  }

  openRegister() {
    this.props.navigation.navigate('RegisterStack');
  }

  openForgotPassword() {
    this.props.navigation.navigate('ForgotPasswordStack');
  }

  setLoginData(LoginData) {
    this.setState({LoginData});
  }

  async pressLogin() {
    try {
      const {LoginData} = this.state;
      const {email, password, rememberMe} = LoginData;
      if (this.checkLoginDatas(email) && this.checkLoginDatas(password)) {
        this.connectToFirebase(email, password, rememberMe);
      } else {
        this.setState({uyariBosAlanlar: true});
      }
    } catch (err) {
      this.setState({uyariBosAlanlar: true});
      console.log('errerrerr', err);
    }
  }

  checkLoginDatas(value) {
    if (value !== undefined && value !== null && value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  uyariCallBack(value) {
    this.setState({uyariKullanıcıAdi: value});
  }

  uyariBosAlanlarCallBack(value) {
    this.setState({uyariBosAlanlar: value});
  }

  render() {
    const {userEmail} = this.state;
    return (
      <Wallpaper>
        <View
          style={{
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginTop: 100, textAlign: 'center'}}> MADALYON</Text>
        </View>
        <Form
          username={userEmail}
          callBack={this.setLoginData}
          callBackForgotPassword={this.openForgotPassword}
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Button callBack={this.pressLogin}>
            <View style={Styles.buttonView}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Giriş yap
              </Text>
            </View>
          </Button>
          <Button callBack={this.openRegister}>
            <View style={Styles.buttonViewTransparent}>
              <Text
                style={{fontSize: 20, color: '#7B53EC', fontWeight: 'bold'}}>
                Kaydol
              </Text>
            </View>
          </Button>
          <Button callBack={this.openRegister}>
            <View style={Styles.buttonViewTransparent}>
              <Text
                style={{fontSize: 20, color: '#7B53EC', fontWeight: 'bold'}}>
                Misafir Girişi
              </Text>
            </View>
          </Button>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.uyariKullanıcıAdi}
          destroyOnClose
          onRequestClose={() => {
            this.setState({uyariKullanıcıAdi: false});
          }}>
          <Uyari
            uyariText="Email ya da şifreniz yanlış girilmiştir."
            callBack={this.uyariCallBack}
          />
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.uyariBosAlanlar}
          destroyOnClose
          onRequestClose={() => {
            this.setState({uyariBosAlanlar: false});
          }}>
          <Uyari
            uyariText="Lütfen bütün alanları eksiksiz doldurun."
            callBack={this.uyariBosAlanlarCallBack}
          />
        </Modal>
      </Wallpaper>
    );
  }
}
export default Login;