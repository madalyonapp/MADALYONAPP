import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {InputWithButton} from '../components/TextInput';
import {ListItem, Separator} from '../components/List';
import Currencies from '../data/Currencies';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

class CurrencyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseCurrency: 'TRY', //Başlangıç olarak sayfa açıldığında gelecek olan değerler
      convertCurrency: 'USD',
      baseOrConvert: false,

      amount: null,
      result: '',
      date: '',

      selected: null,
      modalVisible: false,
    };
  }

  calculate = () => {
    const amount = this.state.amount;

    let url =
      'https://api.exchangeratesapi.io/latest?base=' + this.state.baseCurrency;
    fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const date = data.date;
        const result = (
          data.rates[this.state.convertCurrency] * amount
        ).toFixed(2);

        this.setState({
          result,
          date,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChangeText = (text) => {
    //Yazıda değişim algılandığında api işlemleri başlasın

    this.setState(
      {
        amount: text,
      },
      this.calculate,
    );
  };

  handlePressBaseCurrency = () => {
    //Modal İle Gözükecek
    //Modal ile işlem yapıldığı için ayrı olarak CurrencyList sayfasına gerek kalmadı
    //Döviz birimlerinin yanındaki tik işaretini base ile convert değerlerde ayrı ayrı göstermek için baseOrConvert değişkeni oluşturdum

    const {modalVisible, baseOrConvert, baseCurrency} = this.setState;
    this.setState({modalVisible: !modalVisible});
    this.setState({baseOrConvert: true});
    baseOrConvert !== true ? this.setState({selected: null}) : '';
  };

  handlePressConvertCurrency = () => {
    //flatlist sayfası açılsın
    //Modal ile Gözükecek
    //
    const {modalVisible, baseOrConvert} = this.setState;

    this.setState({modalVisible: !modalVisible});
    this.setState({baseOrConvert: false});
    baseOrConvert !== false ? this.setState({selected: null}) : '';
  };

  handlePress = (item) => {
    const {
      baseCurrency,
      convertCurrency,
      modalVisible,
      baseOrConvert,
    } = this.state;
    //item seçildiğinde baseorConvert değeri true ise base değişecek false ise convert olan değişecek
    if (baseOrConvert) {
      this.setState({selected: item});
      //sondan itibaren 3 harf ayrılması için substr kullandım
      this.setState({baseCurrency: item.substr(-3)}, this.calculate);
      //değer seçildikten sonra tik işareti ile seçilenin gözükmesi için modal'ın geç kapanmasını setTimeOut ile sağladım
      setTimeout(() => {
        this.setState({modalVisible: !modalVisible});
      }, 400);
    } else {
      this.setState({selected: item});

      this.setState({convertCurrency: item.substr(-3)}, this.calculate);

      setTimeout(() => {
        this.setState({modalVisible: !modalVisible});
      }, 400);
    }
  };
  handlePressSwitchCurrency = () => {
    const {baseCurrency, convertCurrency, amount, result} = this.state;
    let switchValue = baseCurrency;
    this.setState({baseCurrency: convertCurrency});
    this.setState({convertCurrency: switchValue});
    this.setState({amount: null});
    this.setState({result: null});
  };

  render() {
    let {navigation} = this.props;
    const {
      baseCurrency,
      baseCurrencyText,
      convertCurrency,
      convertCurrencyText,
      amount,
      result,
      selected,
      modalVisible,
      date,
    } = this.state;
    //döviz değerlerini içeren data ve dil listesi güncellendi
    return (
      <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
        <Modal visible={modalVisible} animationType="slide" transparent={false}>
          <View>
            <FlatList
              renderItem={({item}) => (
                <ListItem
                  onPress={() => this.handlePress(item)}
                  text={item.slice(0, item.search('-') - 1)}
                  selected={item === selected}
                />
              )}
              data={Currencies}
              keyExtractor={(item) => item}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </Modal>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'center',
          }}>
          <Foundation name="dollar" size={110} />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <InputWithButton
            buttonText={baseCurrency}
            onPress={() => this.handlePressBaseCurrency()}
            keyboardType="numeric"
            onChangeText={(text) => this.handleChangeText(text)}
            value={amount}
          />

          <InputWithButton
            editable={false}
            buttonText={convertCurrency}
            onPress={() => this.handlePressConvertCurrency()}
            value={result}
          />
          <TouchableHighlight
            underlayColor="#D3D3D3"
            onPress={() => this.handlePressSwitchCurrency()}>
            <View
              style={{
                marginTop: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons name="swap-vertical" size={45} />
              <Text style={{fontSize: 17}}>Değerleri Değiştir</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default CurrencyPage;
