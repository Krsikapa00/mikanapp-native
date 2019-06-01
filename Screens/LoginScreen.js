import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextInputComp from '../Components/TextInputComp';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: {
               id: 1,
               name: "NED",
           },
           LoginUsername: '',
           LoginPassowrd: '',
        }
    }

    onSetUsername = (text) =>{
        this.setState({LoginUsername: text})
    }

    onSetPassword = (text) =>{
        this.setState({LoginPassowrd: text})
    }

    onSubmitLogin = () => {
        fetch('https://mikan-app-api.herokuapp.com/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                name : this.state.LoginUsername,
                password : this.state.LoginPassowrd,
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.navigation.navigate
                    ('DrawerNavigator', {
                        user: user
                    })
            } else alert('Login did not work. Try again')
        })
        .catch(err => alert(err));
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInputComp contentType='username' onChangeText={this.onSetUsername} />
                <TextInputComp contentType='password' onChangeText={this.onSetPassword} Secure={true} />

                <Button style={styles.buttons} title="Complete Log in" onPress={this.onSubmitLogin} /> 
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
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      }
  })
  