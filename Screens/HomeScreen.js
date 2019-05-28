import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';




//Want to display last punch here for regular users and list of last punch for admin users
class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  