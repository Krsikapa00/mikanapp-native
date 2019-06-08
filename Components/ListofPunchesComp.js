import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import SinglePunch from "./SinglePunchComp";

class ListofPunches extends Component {

    render() {
        const { PunchArray } = this.props;
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={PunchArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>
                    <View style={styles.container}>
                        <SinglePunch Punch={item} />
                    </View>
                    }
                />
            </View>
        );
    }
}
export default ListofPunches;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});