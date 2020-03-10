import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import UserInput from './UserInput';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setValues = this.setValues.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  setValues(result) {
    const {email, rememberMe, password} = result;
    const LoginData = {
      rememberMe,
      email,
      password,
    };
    this.props.callBack(LoginData);
  }

  forgotPassword() {
    this.props.callBackForgotPassword();
  }

  render() {
    const {register = false, forgotPassword = false} = this.props;
    return (
      <View style={styles.container}>
        <UserInput
          forgotPassword={forgotPassword}
          register={register}
          callBack={this.setValues}
          callBackForgotPassword={this.forgotPassword}
        />
      </View>
    );
  }
}

Form.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  register: PropTypes.bool,
  forgotPassword: PropTypes.bool,
  callBack: PropTypes.func,
  callBackForgotPassword: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});