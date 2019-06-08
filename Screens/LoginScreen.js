import React, {Component} from 'react';
import { View, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';
import TextInputComp from '../Components/TextInputComp';
import onStoreData from '../Components/AsyncFunctions/StoreData';

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
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }
    focusNextField(id) {
        this.inputs[id].focus();
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
                if (onStoreData('user', user)){
                    if (user.admin)
                        this.props.navigation.navigate('AdminDrawerNavigator')
                    else {
                        this.props.navigation.navigate('DrawerNavigator')
                    }
                }

            } else alert('Login did not work. Try again')
        })
        .catch(err => alert(err));
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.Textinput}
                    onChangeText={(text) => {this.onSetUsername(text)}}
                    textContentType={'username'}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {this.focusNextField('two')}}
                    onBlur={()=> false}
                />
                <TextInput
                    ref={ input => { this.inputs['two'] = input}}
                    style={styles.Textinput}
                    onChangeText={(text) => {this.onSetPassword(text)}}
                    textContentType={'password'}
                    secureTextEntry={true}
                   
                />
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
    },
    Textinput: {
        height: 30,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,
    }

  })
  