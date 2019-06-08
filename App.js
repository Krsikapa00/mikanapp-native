import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import DrawerNavigator from './Screens/DrawerNavigation';
import AdminDrawerNavigator from './Screens/AdminDrawerNavigator';


const AppStackNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  DrawerNavigator: {screen: DrawerNavigator} ,
  AdminDrawerNavigator: {screen: AdminDrawerNavigator}

},
{
  initialRouteName: 'LoginScreen',
})

const AppContainer = createAppContainer(AppStackNavigator)

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


