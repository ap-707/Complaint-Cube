import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import configData from './env.json';
import Register from './assets/screens/Register';
import Login from './assets/screens/Login';
import Admin_Profile from './assets/screens/Admin_Profile';
import Edit_Officer_Profile from './assets/screens/Edit_Officer_Profile';
import Home from './assets/screens/Home';
import See_officer_user from './assets/screens/See_officer_user';
import See_users from './assets/screens/See_users';
import See_officers from './assets/screens/See_officers';
import Details from './assets/screens/Details';
import All_Complaints from './assets/screens/All_Complaints';
import See_complaintDetails from './assets/screens/See_complaintDetails';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).",
  "Non-serializable values were found in the navigation state."
]);


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      is_login: null,
    }
  }
  componentDidMount = async () => {
    let val = await AsyncStorage.getItem('admin_logindata');
    console.log("val: ", JSON.parse(val));
    (val !== null)
      ? this.setState({ is_login: true })
      : this.setState({ is_login: false })

    console.log('is_Login : ', this.state.is_login);
  }

  render() {

    function HomeScreenTabs(item) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="See_officer_user" component={See_Officer_Usee_screen} />
          <Stack.Screen name="All_Complaints" component={All_Complaints} />
          <Stack.Screen name="See_complaintDetails" component={See_complaintDetails} />
          <Stack.Screen name="Admin_Profile" component={Admin_Profile} />
        </Stack.Navigator>
      );

    };


    function See_Officer_Usee_screen(item) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="See_officer_user_Screen" component={See_officer_user} />
          <Stack.Screen name="See_users" component={See_users} />
          <Stack.Screen name="See_officers" component={See_officers} />
          <Stack.Screen name="Details" component={Details} initialParams={item} />
        </Stack.Navigator>
      );
    };

    function Root() {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeScreen" component={HomeScreenTabs} />
        </Stack.Navigator>
      )
    }
    return (

      <NavigationContainer independent={true}>
        {
          (this.state.is_login) ? HomeScreenTabs() : Root()
        }
      </NavigationContainer>
    );
  }
}
