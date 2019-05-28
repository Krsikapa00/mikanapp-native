import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: {
               id: 1,
               name: "NED",
           }
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>UserName</Text>
                <Text>Password</Text>

                <Button style={styles.buttons} title="Complete Log in" onPress={()=>this.props.navigation.navigate
                    ('DrawerNavigator', {
                        user: this.state.user
                    })} /> 
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      }
  })
  