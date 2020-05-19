import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
class ListItem extends Component {
  render() {
    const {text, onPress, selected} = this.props;
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={styles.underlayColor}>
        <View style={styles.row}>
          <Text style={styles.text}>{text}</Text>
          {selected ? <Icon name="check" size={20} /> : null}
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
