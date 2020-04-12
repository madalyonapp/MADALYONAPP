import {StyleSheet} from 'react-native';

const INPUT_HEİGHT = 48;
const BORDER_RADIUS = 4;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingLeft: 40,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    height: INPUT_HEİGHT,
    borderRadius: BORDER_RADIUS,
  },
  containerDisabled: {
    backgroundColor: '#F0F0F0',
  },
  buttonContainer: {
    borderWidth: 1,
    height: INPUT_HEİGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    color: 'black',
  },
  input: {
    flex: 1,
    height: INPUT_HEİGHT,
    borderTopRightRadius: BORDER_RADIUS,
    fontSize: 18,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  separator: {
    height: INPUT_HEİGHT,
  },
});

export default styles;
