import React, { Component } from "react";
import { 
    View,
    Button,
    StyleSheet
} from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker'


class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: this.props.ButtonTitle
        }
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = date => {
        //CANNOT SET STATE FOR DATE FOR SOME REASON
        this.setState({date:date})
        this.props.setDate(date)
        this.hideDateTimePicker();
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title={this.state.date.toString().substring(0,15)} onPress={this.showDateTimePicker} />
                <DateTimePicker
                    mode={'date'}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </View>
        );
    }
}
export default DatePickerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});