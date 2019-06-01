import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
const SinglePunch = ({Punch}) =>{
    let { id, name, in_date, in_time, out_date, out_time, location, difference } = Punch;
    if (out_date  === null) {
        out_date = 'N/A';
        out_time = 'N/A';
        difference = 'N/A';
    }
        return (
        <View style={styles.container}>
            <Text>{`Id: ${id}`}</Text>
            <Text>{`Location: ${location}`}</Text>
            <Text>{`In Date: ${in_date.substring(0,10)}`}</Text>
            <Text>{`In Time: ${in_time.substring(0,8)}`}</Text>
            <Text>{`Out Date: ${out_date.substring(0,10)}`}</Text>
            <Text>{`Out Time: ${out_time.substring(0,8)}`}</Text>
            <Text>{`Hours Worked: ${(difference/60).toFixed(2)}`}</Text>
        </View>
    );
}
export default SinglePunch;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,

    }
});