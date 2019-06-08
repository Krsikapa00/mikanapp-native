import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class LocationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LocationScreen</Text>
            </View>
        );
    }
}
export default LocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});