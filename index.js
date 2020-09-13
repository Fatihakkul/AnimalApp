/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Login , SplashScreen } from './src/pages'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);