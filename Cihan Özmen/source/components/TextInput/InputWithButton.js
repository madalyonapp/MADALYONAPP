import React, {Component} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from '../TextInput/styles';

const InputWithButton = props => {
  const {onPress, buttonText, editable} = props;
  const containerStyles = [styles.container];

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default InputWithButton;
