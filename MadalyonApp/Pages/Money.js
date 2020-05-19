import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Baslik} from '../components/header';
import MoneyCumle from '../data/MoneyCumle';
class Money extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View>
        <Baslik name="İnsani Gereçler Sözlüğü" />
        <View style={{padding: 5}}>
          <FontAwesome name="money" size={60} />
        </View>
        <View style={{borderWidth: 1, height: 300}}>
          <ScrollView>
            <Text style={{fontSize: 20}}>
              {MoneyCumle.Cumle1.Tr}
              {'\n'}
              {MoneyCumle.Cumle1.En}
              {'\n'}
              {MoneyCumle.Cumle1.Fr}
              {'\n'}
              {MoneyCumle.Cumle1.De}
              {'\n'}
              {MoneyCumle.Cumle1.Es}
              {'\n'}
              {'\n'}
              {MoneyCumle.Cumle2.Tr}
              {'\n'}
              {MoneyCumle.Cumle2.En}
              {'\n'}
              {MoneyCumle.Cumle2.Fr}
              {'\n'}
              {MoneyCumle.Cumle2.De}
              {'\n'}
              {MoneyCumle.Cumle2.Es}
              {'\n'}
              {'\n'}
              {MoneyCumle.Cumle3.Tr}
              {'\n'}
              {MoneyCumle.Cumle3.En}
              {'\n'}
              {MoneyCumle.Cumle3.Fr}
              {'\n'}
              {MoneyCumle.Cumle3.De}
              {'\n'}
              {MoneyCumle.Cumle3.Es}
              {'\n'}
              {'\n'}
              {MoneyCumle.Cumle4.Tr}
              {'\n'}
              {MoneyCumle.Cumle4.En}
              {'\n'}
              {MoneyCumle.Cumle4.Fr}
              {'\n'}
              {MoneyCumle.Cumle4.De}
              {'\n'}
              {MoneyCumle.Cumle4.Es}
              {'\n'}
              {'\n'}
              {MoneyCumle.Cumle5.Tr}
              {'\n'}
              {MoneyCumle.Cumle5.En}
              {'\n'}
              {MoneyCumle.Cumle5.Fr}
              {'\n'}
              {MoneyCumle.Cumle5.De}
              {'\n'}
              {MoneyCumle.Cumle5.Es}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Money;
