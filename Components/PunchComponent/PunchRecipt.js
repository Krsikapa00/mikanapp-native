import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PunchRecipt extends Component {

    render() {
        let { id, name, in_date, in_time, out_date, out_time, location } = this.props.Punch;

        if (out_date  === null) {
            out_date = 'N/A';
            out_time = 'N/A';
        }
        return (
            <View style={styles.container}>
                <Text>{`Id: ${id}`}</Text>
                <Text>{`Location: ${location}`}</Text>
                <Text>{`In Date: ${in_date.substring(0,10)}`}</Text>
                <Text>{`In Time: ${in_time.substring(0,8)}`}</Text>
                <Text>{`Out Date: ${out_date.substring(0,10)}`}</Text>
                <Text>{`Out Time: ${out_time.substring(0,8)}`}</Text>
            </View>
        );
    }
}
export default PunchRecipt;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});