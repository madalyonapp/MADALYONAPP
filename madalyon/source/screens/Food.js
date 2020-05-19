import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Baslik} from '../components/header';
import FoodCumle from '../data/FoodCumle';
class Food extends Component {
  render() {
    return (
      <View>
        <Baslik name="İnsani Gereçler Sözlüğü" />
        <View style={{padding: 5}}>
          <MaterialCommunityIcons name="food-fork-drink" size={60} />
        </View>
        <View style={{borderWidth: 1, height: 300}}>
          <ScrollView>
            <Text style={{fontSize: 20}}>
              {FoodCumle.Cumle1.Tr}
              {'\n'}
              {FoodCumle.Cumle1.En}
              {'\n'}
              {FoodCumle.Cumle1.Fr}
              {'\n'}
              {FoodCumle.Cumle1.De}
              {'\n'}
              {FoodCumle.Cumle1.Es}
              {'\n'}
              {'\n'}
              {FoodCumle.Cumle2.Tr}
              {'\n'}
              {FoodCumle.Cumle2.En}
              {'\n'}
              {FoodCumle.Cumle2.Fr}
              {'\n'}
              {FoodCumle.Cumle2.De}
              {'\n'}
              {FoodCumle.Cumle2.Es}
              {'\n'}
              {'\n'}
              {FoodCumle.Cumle3.Tr}
              {'\n'}
              {FoodCumle.Cumle3.En}
              {'\n'}
              {FoodCumle.Cumle3.Fr}
              {'\n'}
              {FoodCumle.Cumle3.De}
              {'\n'}
              {FoodCumle.Cumle3.Es}
              {'\n'}
              {'\n'}
              {FoodCumle.Cumle4.Tr}
              {'\n'}
              {FoodCumle.Cumle4.En}
              {'\n'}
              {FoodCumle.Cumle4.Fr}
              {'\n'}
              {FoodCumle.Cumle4.De}
              {'\n'}
              {FoodCumle.Cumle4.Es}
              {'\n'}
              {'\n'}
              {FoodCumle.Cumle5.Tr}
              {'\n'}
              {FoodCumle.Cumle5.En}
              {'\n'}
              {FoodCumle.Cumle5.Fr}
              {'\n'}
              {FoodCumle.Cumle5.De}
              {'\n'}
              {FoodCumle.Cumle5.Es}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Food;
