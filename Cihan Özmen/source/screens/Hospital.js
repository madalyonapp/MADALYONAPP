import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import HospitalCumle from '../data/HospitalCumle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Baslik} from '../components/header';

class Hospital extends Component {
  render() {
    return (
      <View>
        <Baslik name="İnsani Gereçler Sözlüğü" />
        <View style={{padding: 5}}>
          <FontAwesome name="hospital-o" size={60} />
        </View>
        <View style={{borderWidth: 1, height: 300}}>
          <ScrollView>
            <Text style={{fontSize: 20}}>
              {HospitalCumle.Cumle1.Tr}
              {'\n'}
              {HospitalCumle.Cumle1.En}
              {'\n'}
              {HospitalCumle.Cumle1.Fr}
              {'\n'}
              {HospitalCumle.Cumle1.De}
              {'\n'}
              {HospitalCumle.Cumle1.Es}
              {'\n'}
              {'\n'}
              {HospitalCumle.Cumle2.Tr}
              {'\n'}
              {HospitalCumle.Cumle2.En}
              {'\n'}
              {HospitalCumle.Cumle2.Fr}
              {'\n'}
              {HospitalCumle.Cumle2.De}
              {'\n'}
              {HospitalCumle.Cumle2.Es}
              {'\n'}
              {'\n'}
              {HospitalCumle.Cumle3.Tr}
              {'\n'}
              {HospitalCumle.Cumle3.En}
              {'\n'}
              {HospitalCumle.Cumle3.Fr}
              {'\n'}
              {HospitalCumle.Cumle3.De}
              {'\n'}
              {HospitalCumle.Cumle3.Es}
              {'\n'}
              {'\n'}
              {HospitalCumle.Cumle4.Tr}
              {'\n'}
              {HospitalCumle.Cumle4.En}
              {'\n'}
              {HospitalCumle.Cumle4.Fr}
              {'\n'}
              {HospitalCumle.Cumle4.De}
              {'\n'}
              {HospitalCumle.Cumle4.Es}
              {'\n'}
              {'\n'}
              {HospitalCumle.Cumle5.Tr}
              {'\n'}
              {HospitalCumle.Cumle5.En}
              {'\n'}
              {HospitalCumle.Cumle5.Fr}
              {'\n'}
              {HospitalCumle.Cumle5.De}
              {'\n'}
              {HospitalCumle.Cumle5.Es}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Hospital;
