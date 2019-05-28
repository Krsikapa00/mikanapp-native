import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PunchIn from './PunchIn';
import PunchOut from './PunchOut';
import History from './History'



const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen: {screen: HomeScreen},
    PunchIn: {screen: PunchIn},
    PunchOut: {screen: PunchOut},
    History: {screen: History},   
    
},  {
  navigationOptions: ({ navigation }) => ({
    headerLeft: (

      <View style={{ padding: 10 }}>
        <Ionicons name="md-menu" size={24} onPress={() => navigation.toggleDrawer()} />
      </View>
    )
  })
})


export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  