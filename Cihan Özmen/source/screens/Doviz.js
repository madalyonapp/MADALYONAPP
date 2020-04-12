import React, {Component} from 'react';
import {View} from 'react-native';
import {Baslik} from '../components/header';
import {InputWithButton} from '../components/TextInput';

class Doviz extends Component {
  constructor() {
    super();

    this.state = {
      baseCurrency: 'TRY',
      convertCurrency: 'USD',

      amount: null,
      result: '',
      date: '',
    };
  }

  calculate = () => {
    const {amount} = this.state;
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

  handlePressBaseCurrency = () => {
    //Doviz list Açılır
    //navigation.navigate('CurrencyList');
  };
  handlePressConvertCurrency = () => {
    //Doviz list Açılır
    //navigation.navigate('CurrencyList');
  };

  handleChangeText = (text) => {
    // Yazıda değişim algılandığında dönüşüm işlemleri başlasın
    this.setState(
      {
        amount: text,
      },
      this.calculate,
    );
  };
  render() {
    const {baseCurrency, convertCurrency, result} = this.state;
    return (
      <View>
        <Baslik name="Döviz" />

        <InputWithButton
          buttonText={baseCurrency}
          onPress={this.handlePressBaseCurrency}
          keyboardType="numeric"
          onChangeText={(text) => this.handleChangeText(text)}
        />
        <InputWithButton
          buttonText={convertCurrency}
          onPress={this.handlePressConvertCurrency}
          editable={false}
          value={result}
        />
      </View>
    );
  }
}

export default Doviz;
