import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from './Button';
import Styles from './Styles';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
    this.setValues = this.setValues.bind(this);
    this.pressRemember = this.pressRemember.bind(this);
    this.pressForgotPassword = this.pressForgotPassword.bind(this);
  }

  setValues() {
    const {email, password, rememberMe} = this.state;
    const result = {
      email,
      password,
      rememberMe,
    };
    this.props.callBack(result);
  }

  pressRemember() {
    const {rememberMe} = this.state;
    this.setState({rememberMe: !rememberMe});
  }

  pressForgotPassword() {
    this.props.callBackForgotPassword();
  }

  render() {
    const {register = false, forgotPassword = false} = this.props;
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{padding: 0, margin: 0, height: 100}}>
        <View style={{marginTop: 250}}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              returnKeyType="done"
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
              onChangeText={value =>
                this.setState({email: value}, () => this.setValues())
              }
            />
          </View>
            <View style={[styles.inputView, {marginBottom: 0}]}>
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={false}
                returnKeyType="done"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                onChangeText={value =>
                  this.setState({password: value}, () => this.setValues())
                }
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Button callBack={this.pressRemember}>
                <View style={Styles.buttonViewSmall}>
                  <Image
                    source={require('../../res/like.png')}
                    style={{
                      color: '#7B53EC',
                      width: 14,
                      height: 12,
                      marginRight: 5,
                    }}
                    resizeMode="stretch"
                  />
                  <Text style={{fontSize: 12, color: 'white'}}>
                     Beni hatırla!
                  </Text>
                </View>
              </Button>
              <Button callBack={this.pressForgotPassword}>
                <View style={Styles.buttonViewSmall}>
                  <Text style={{fontSize: 12, color: '#7B53EC'}}>
                    Şifremi unuttum!
                  </Text>
                </View>
              </Button>
            </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  password: PropTypes.bool,
  callBackShowPass: PropTypes.func,
  callBack: PropTypes.func,
  register: PropTypes.bool,
  forgotPassword: PropTypes.bool,
  callBackForgotPassword: PropTypes.func,
};

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'rgba(0,0,0,0.1607843137254902)',
    width: (DEVICE_WIDTH * 2) / 3,
    minHeight: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft: 25,
    borderRadius: 20,
    color: '#ffffff',
  },
  input: {
    width: (DEVICE_WIDTH * 2) / 3,
    height: 40,
    color: 'rgba(0,0,0,0.25098039215686274)',
  },
});
