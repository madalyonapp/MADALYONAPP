import {StyleSheet} from 'react-native';

const underlayColor = '#979797';
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '#E2E2E2',
    flex: 1,
    height: StyleSheet.hairlineWidth, //ÖNEMli
  },
});

export default styles;
