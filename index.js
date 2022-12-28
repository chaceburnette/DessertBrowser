/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import NativeTachyons from 'react-native-style-tachyons';
import { StyleSheet } from 'react-native';
NativeTachyons.build({ rem: 16, fontRem: 20 }, StyleSheet);

AppRegistry.registerComponent(appName, () => App);
