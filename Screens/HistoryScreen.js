import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HistoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HistoryScreen</Text>
            </View>
        );
    }
}
export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});