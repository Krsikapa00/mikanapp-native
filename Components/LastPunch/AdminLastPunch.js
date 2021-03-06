import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import ListofPunches from "../ListofPunchesComp";


class AdminLastPunch extends Component {

    render() {
        const { PunchArray } = this.props;
        
        return (
            <ListofPunches PunchArray={PunchArray} />
        );
    }
}
export default AdminLastPunch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});