/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App'; Uygulamaya giriş olarak src içindeki Madalyon.js yi seçtim
// Oradan da diğer sayfalara geçiş sağlanıyor
import {name as appName} from './app.json';
import Madalyon from './source/Madalyon';

AppRegistry.registerComponent(appName, () => Madalyon);
