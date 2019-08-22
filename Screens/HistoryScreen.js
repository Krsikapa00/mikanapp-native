import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Picker
} from "react-native";
import HistorySearch from '../Components/History/HistorySearch'
import HistoryList from '../Components/History/HistoryList'

class HistoryScreen extends Component {

    //Create start and end date buttons. Have the value chosen be displayed on buttons and then make 
    //a drop down menu with users' name then a submit button. display the punches in a flat list. 
    //using the single punch component to dislpay each punch 

    constructor(props){
        super(props);
        this.state = {
            searching: true
        }
    }

    onSubmitSearch = (searchData) => {
        const { startDate, endDate, user } = searchData;
        if ( !startDate || !endDate || !user) {
            return alert('Not all fields fill out. PLease try again')
        }
        
        this.setState({searching: false})
    }
    render() {
        //Split history screen into 2 components. One where it is a form asking to determine what history
        //you want (user, daterange) and once submit is clicked it retrives data and displays it
        //Have it reset once you leave screen like in homescreen
        if (this.state.searching){
            return (
                <View style={styles.container} >
                    <HistorySearch onSubmitSearch={this.onSubmitSearch()} />
                </View>
            );
        }
        return (
            <View style={styles.container} >
                <HistoryList />
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
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    datepicker: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 20
    }
});