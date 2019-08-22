import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Picker,
    Button
} from "react-native";
import DatePickerComp from '../DatePickerComp'

class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            user: null
        }
    }

    onSetStartDate = (date) => {
        this.setState({startDate:date})
    }
    onSetEndDate = (date) => {
        this.setState({endDate:date})
    }

    onSubmitSearch = () => {
        const { startDate, endDate, user } = this.state;
        const searchData = {
            startDate: startDate,
            endDate: endDate,
            user: user
        }
        this.props.onSubmitSearch(searchData);
    }

    render() {
        //Split history screen into 2 components. One where it is a form asking to determine what history
        //you want (user, daterange) and once submit is clicked it retrives data and displays it
        //Have it reset once you leave screen like in homescreen
        return (
            <View style={styles.container} >
                <View style={styles.datepicker}>
                    <DatePickerComp 
                        ButtonTitle={'Start Date'}
                        setDate={(date)=>{this.onSetStartDate(date)}}
                    />
                    <DatePickerComp 
                        ButtonTitle={'End Date'}
                        setDate={(date)=>{this.onSetEndDate(date)}}
                    />
                </View>

                <Picker
                    selectedValue={this.state.user}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({user: itemValue})
                    }>
                    <Picker.Item label="Ned" value="Ned" />
                    <Picker.Item label="Mikan" value="Mikan" />
                </Picker>

                
                <Button style={styles.button} title={'Submit'} onPress={this.onSubmitSearch()} />
            </View>
        );
    }
}
export default History;

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