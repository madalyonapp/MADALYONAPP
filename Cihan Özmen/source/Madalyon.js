import React, {Component} from 'react';
import {View, Text} from 'react-native';

import GezerOkurTercih from './screens/GezerOkurTercih';
import InsaniGerecler from './screens/InsaniGerecler';
import Airport from './screens/Airport';
import Hospital from './screens/Hospital';
import Food from './screens/Food';
import Money from './screens/Money';

import Doviz from './screens/Doviz';
import DovizList from './screens/DovizList';

import Ceviri from './screens/Ceviri';
import LanguageList from './screens/LanguageList';

class Madalyon extends Component {
  render() {
    return (
      <View>
        <Doviz />
      </View>
    );
  }
}

export default Madalyon;
