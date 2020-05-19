import {StyleSheet} from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
    // width: '90%',
    // paddingLeft: 40,
    // paddingTop: 50,
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginVertical: 11,
    // height: INPUT_HEIGHT,
    // borderRadius: BORDER_RADIUS,
  },
  containerDisabled: {
    backgroundColor: '#D3D3D3',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    //borderWidth: 1,
    // height: INPUT_HEIGHT,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderTopLeftRadius: BORDER_RADIUS,
    // borderBottomLeftRadius: BORDER_RADIUS,
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '#4F6D7A',
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: '#797979',
    fontSize: 18,
    // flex: 1,
    // height: INPUT_HEIGHT,
    // borderTopRightRadius: BORDER_RADIUS,
    // fontSize: 18,
    //borderWidth: 1,
    // paddingHorizontal: 8,
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#E2E2E2',
  },
});

export default styles;
