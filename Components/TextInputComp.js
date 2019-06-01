import React, { Component } from "react";
import { 
    View,
    TextInput,
    StyleSheet
} from "react-native";

class TextInputComp extends Component {
    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.Textinput}
                    onChangeText={(text) => {this.props.onChangeText(text)}}
                    textContentType={this.props.contentType}
                    secureTextEntry={this.props.Secure}
                />
            </View>
        );
    }
}
export default TextInputComp;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Textinput: {
        height: 30,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1
    }
});