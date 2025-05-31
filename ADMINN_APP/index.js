/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import HomeScreenTabs from './App';
import Register from './assets/screens/Register';
import Login from './assets/screens/Login';
import Admin_Profile from './assets/screens/Admin_Profile';
import Edit_Officer_Profile from './assets/screens/Edit_Officer_Profile';


import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => HomeScreenTabs);
// AppRegistry.registerComponent(appName, () => Register);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Admin_Profile);
// AppRegistry.registerComponent(appName, () => Edit_Officer_Profile);
