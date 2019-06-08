import React, {Component} from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PunchIn from './PunchIn';
import PunchOut from './PunchOut';
import History from './HistoryScreen';


const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen: {screen: HomeScreen},
    PunchIn: {screen: PunchIn},
    PunchOut: {screen: PunchOut},
    History: {screen: History}    
},  {
  navigationOptions: ({ navigation }) => ({
    headerTitle: <Text>Welcome</Text>,
    headerLeft: (

      <View style={{ padding: 10 }}>
        <Ionicons name="md-menu" size={24} onPress={() => navigation.toggleDrawer()} />
      </View>
    ),
    headerRight: (
      <View style={{ padding: 10 }}>
        <Ionicons name="md-log-out" size={24} 
        onPress={async () => {
          await AsyncStorage.clear();
          navigation.navigate('LoginScreen')
        }} />
      </View>
    )
  })
})

const AppDrawerContainer = createStackNavigator({
  DrawerNavigator: AppDrawerNavigator
})


export default AppDrawerContainer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  