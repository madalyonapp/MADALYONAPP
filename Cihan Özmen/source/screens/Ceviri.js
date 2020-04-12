import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Baslik} from '../components/header';
import {InputWithButton} from '../components/TextInput';

const TEMP_BASE_LANGUAGE = 'TR';
const TEMP_TRANSTO_LANGUAGE = 'EN';

class Ceviri extends Component {
  constructor() {
    super();
    this.state = {
      baseLanguage: 'TR', //Api url'sine büyük harf  Yazılmıyor!!!
      convertLanguage: 'EN',

      text: null,
      transText: '',
    };
  }
  translate = () => {
    const {text} = this.state;

    let url =
      'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200411T170534Z.9a15a34caa8cfd14.a7b93b2d25a51383575e1c3726f327dd412b365f&text=' +
      text +
      '&lang=tr-en';
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

  handlePressBaseLanguage = () => {
    //LanguagesList sayfasına yönlendirsin
    //navigation.navigate('LanguageList')
  };

  handlePressTranstoLanguage = () => {
    //LanguagesList sayfasına yönlendirsin
    //navigation.navigate('LanguageList')
  };

  handleChangeText = (text) => {
    this.setState({text});
  };
  buttonPress = () => {
    this.translate();
  };
  render() {
    const {baseLanguage, convertLanguage, transText} = this.state;
    return (
      <View>
        <Baslik name="Çeviri" />

        <InputWithButton
          onChangeText={(text) => this.handleChangeText(text)}
          buttonText={baseLanguage}
          onPress={this.handlePressBaseLanguage}
        />
        <InputWithButton
          buttonText={convertLanguage}
          onPress={this.handlePressTranstoLanguage}
          value={transText.toString()}
        />
        <TouchableHighlight
          style={{
            marginHorizontal: 150,
            marginVertical: 50,
          }}
          underlayColor="#D3D3D3"
          onPress={this.buttonPress}>
          <View style={{borderWidth: 1, alignItems: 'center', borderRadius: 4}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 25,
                paddingHorizontal: 16,
                color: 'black',
              }}>
              Çevir
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Ceviri;
