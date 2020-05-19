import {Dimensions, StyleSheet, Text} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    // height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    justifyContent: 'center',
    paddingVertical: 70,
  },
  text: {
    fontSize: 0.1 * WIDTH,
    textAlign: 'center',
    //textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
