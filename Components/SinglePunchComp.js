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
        difference = 0;
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
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 20,
        marginTop: 5,
        marginBottom: 25,
        shadowColor: 'gray',

    }
});