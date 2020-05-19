import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Header extends Component {
  render() {
    const {name} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
}

export default Header;
