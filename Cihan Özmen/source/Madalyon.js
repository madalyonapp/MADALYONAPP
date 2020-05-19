import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import GezerOkurTercih from './screens/GezerOkurTercih';
import InsaniGerecler from './screens/InsaniGerecler';
import Airport from './screens/Airport';
import Hospital from './screens/Hospital';
import Food from './screens/Food';
import Money from './screens/Money';

import Doviz from './screens/Doviz';

import Ceviri from './screens/Ceviri';

import HomeStack from './routes/homeStack';

class Madalyon extends Component {
  render() {
    return <HomeStack />;
  }
}

export default Madalyon;
