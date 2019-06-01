import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import SinglePunch from "../SinglePunchComp";

class PunchRecipt extends Component {

    render() {
        return (
            <SinglePunch Punch={this.props.Punch} />
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