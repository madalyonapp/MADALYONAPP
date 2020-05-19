import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Baslik} from '../components/header';
import AirportCumle from '../data/AirportCumle';

class Airport extends Component {
  render() {
    return (
      <View>
        <Baslik name="İnsani Gereçler Sözlüğü" />
        <View style={{padding: 5}}>
          <Icon name="plane" size={60} />
        </View>
        <View style={{borderWidth: 1, height: 300}}>
          <ScrollView>
            <Text style={{fontSize: 20}}>
              {AirportCumle.Cumle1.Tr}
              {'\n'}
              {AirportCumle.Cumle1.En}
              {'\n'}
              {AirportCumle.Cumle1.Fr}
              {'\n'}
              {AirportCumle.Cumle1.De}
              {'\n'}
              {AirportCumle.Cumle1.Es}
              {'\n'}
              {'\n'}
              {AirportCumle.Cumle2.Tr}
              {'\n'}
              {AirportCumle.Cumle2.En}
              {'\n'}
              {AirportCumle.Cumle2.Fr}
              {'\n'}
              {AirportCumle.Cumle2.De}
              {'\n'}
              {AirportCumle.Cumle2.Es}
              {'\n'}
              {'\n'}
              {AirportCumle.Cumle3.Tr}
              {'\n'}
              {AirportCumle.Cumle3.En}
              {'\n'}
              {AirportCumle.Cumle3.Fr}
              {'\n'}
              {AirportCumle.Cumle3.De}
              {'\n'}
              {AirportCumle.Cumle3.Es}
              {'\n'}
              {'\n'}
              {AirportCumle.Cumle4.Tr}
              {'\n'}
              {AirportCumle.Cumle4.En}
              {'\n'}
              {AirportCumle.Cumle4.Fr}
              {'\n'}
              {AirportCumle.Cumle4.De}
              {'\n'}
              {AirportCumle.Cumle4.Es}
              {'\n'}
              {'\n'}
              {AirportCumle.Cumle5.Tr}
              {'\n'}
              {AirportCumle.Cumle5.En}
              {'\n'}
              {AirportCumle.Cumle5.Fr}
              {'\n'}
              {AirportCumle.Cumle5.De}
              {'\n'}
              {AirportCumle.Cumle5.Es}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Airport;
