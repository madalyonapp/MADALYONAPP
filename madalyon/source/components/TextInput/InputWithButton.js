// import React, {Component} from 'react';
// import {View, TouchableOpacity, Text, TextInput} from 'react-native';
// import styles from '../TextInput/styles';

// const InputWithButton = (props) => {
//   const {onPress, buttonText, editable} = props;
//   const containerStyles = [styles.container];

//   if (editable === false) {
//     containerStyles.push(styles.containerDisabled);
//   }
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.buttonContainer}
//         underlayColor={'#D3D3D3'}
//         onPress={onPress}>
//         <Text style={styles.text}>{buttonText}</Text>
//       </TouchableOpacity>
//       <View style={styles.separator} />
//       <TextInput
//         style={styles.input}
//         {...props}
//         underlineColorAndroid="transparent"
//       />
//     </View>
//   );
// };

// export default InputWithButton;
import React from 'react';
import {View, TextInput, TouchableHighlight, Text} from 'react-native';

import styles from './styles';

const InputWithButton = ({editable, onPress, buttonText, ...props}) => {
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={'#D3D3D3'}>
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

export default InputWithButton;
