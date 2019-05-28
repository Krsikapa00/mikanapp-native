import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import DrawerNavigator from './Screens/DrawerNavigation';


const AppStackNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  DrawerNavigator: {screen: DrawerNavigator} 
},  {
  navigationOptions:{
    gesturesEnabled: false
  }
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


