import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import SinglePunch from "../SinglePunchComp";

class AdminLastPunch extends Component {

    render() {
        const { PunchArray } = this.props;
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={PunchArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>
                    <SinglePunch Punch={item} />
                    }
                />
            </View>
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