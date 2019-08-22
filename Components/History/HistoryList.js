import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HistoryList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HistoryList</Text>
            </View>
        );
    }
}
export default HistoryList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});