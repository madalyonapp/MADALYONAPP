import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Modal,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem, Separator} from '../components/List';

import LanguagesList from '../data/LanguagesList';

class Translate extends Component {
  constructor() {
    super();

    this.state = {
      baseLanguage: 'Türkçe - TR', //Apiye büyük harf ile Yazılmıyor!!!
      convertLanguage: 'İngilizce - EN',
      baseOrConvert: false,

      text: null,
      transText: '',

      selected: null,
      modalVisible: false,
    };
  }
  translate = () => {
    const {text, baseLanguage, convertLanguage} = this.state;

    let url =
      'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200411T170534Z.9a15a34caa8cfd14.a7b93b2d25a51383575e1c3726f327dd412b365f&text=' +
      text +
      '&lang=' +
      baseLanguage.substr(-2).toLowerCase() +
      '-' +
      convertLanguage.substr(-2).toLowerCase();
    //console.log(baseLanguage.substr(-2).toLowerCase());
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const transText = data.text;

        this.setState({
          transText,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handlePress = (item) => {
    const {
      modalVisible,
      baseLanguage,
      convertLanguage,
      baseOrConvert,
    } = this.state;
    this.setState({selected: item});
    baseOrConvert
      ? this.setState({
          baseLanguage: item,
        })
      : this.setState({convertLanguage: item});

    setTimeout(() => {
      this.setState({modalVisible: !modalVisible});
    }, 400);
  };

  handlePressBaseLanguage = () => {
    const {modalVisible, baseOrConvert, transText} = this.state;
    this.setState({selected: null});
    this.setState({baseOrConvert: true});

    setTimeout(() => {
      this.setState({modalVisible: !modalVisible});
    }, 400);
  };

  handlePressConvertToLanguage = () => {
    const {modalVisible, baseOrConvert} = this.state;
    this.setState({selected: null});
    this.setState({baseOrConvert: false});

    setTimeout(() => {
      this.setState({modalVisible: !modalVisible});
    }, 400);
  };

  handlePressCeviri = () => {
    const {text} = this.state;
    if (text !== null && text !== '') {
      this.translate();
    }
  };
  handlePressOnChangeText = (text) => {
    this.setState({text: text});
  };
  handlePressSwitchLanguage = () => {
    const {baseLanguage, convertLanguage, text, transText} = this.state;
    let switchValue = baseLanguage;
    this.setState({baseLanguage: convertLanguage});
    this.setState({convertLanguage: switchValue});
    this.setState({text: null});
    this.setState({transText: null});
  };
  render() {
    let {navigation} = this.props;
    const {
      baseLanguage,
      convertLanguage,
      modalVisible,
      selected,
      text,
      transText,
      baseOrConvert,
    } = this.state;
    //döviz değerlerini içeren data ve dil listesi güncellendi
    return (
      <View style={styles.container}>
        <Modal visible={modalVisible}>
          <View>
            <FlatList
              renderItem={({item}) => (
                <ListItem
                  onPress={() => this.handlePress(item)}
                  text={item.slice(0, item.search('-') - 1)}
                  selected={item === selected}
                />
              )}
              data={LanguagesList}
              keyExtractor={(item) => item}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </Modal>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#F2F2F2"
            onPress={() => this.handlePressBaseLanguage()}>
            <Text style={styles.buttonText}>
              {baseLanguage.slice(0, baseLanguage.search('-') - 1)}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => this.handlePressOnChangeText(text)}
            style={{fontSize: 25}}
            multiline={true}>
            {text}
          </TextInput>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="#F2F2F2"
              onPress={() => this.handlePressConvertToLanguage()}>
              <Text style={styles.buttonText}>
                {convertLanguage.slice(0, convertLanguage.search('-') - 1)}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{marginLeft: 125, marginTop: 5}}>
            <TouchableHighlight
              underlayColor="#F2F2F2"
              onPress={() => this.handlePressSwitchLanguage()}>
              <MaterialCommunityIcons name="swap-vertical" size={50} />
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={{fontSize: 25}} multiline={true}>
            {transText}
          </TextInput>
        </View>
        <View
          style={{
            borderColor: '#F2F2F2',
            borderWidth: 2,
            backgroundColor: 'white',
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
            marginHorizontal: 125,
            marginVertical: 25,
          }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.handlePressCeviri()}
            underlayColor="#F2F2F2">
            <Text style={styles.buttonText}>Çevir</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    borderColor: '#F2F2F2',
    backgroundColor: 'white',
    borderWidth: 2,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,

    elevation: 10,
    margin: 15,
  },
  button: {
    alignItems: 'center',
    width: 150,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#F2F2F2',
    backgroundColor: 'white',
    height: 200,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 3,
    elevation: 10,
  },
});
export default Translate;
