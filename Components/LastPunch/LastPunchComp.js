import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import GetLastPunch from "./GetLastPunch";
import SinglePunch from "../SinglePunchComp";
import AdminLastPunch from './AdminLastPunch'

class LastPunch extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loadingPunches: false
        }
    }

    async componentDidMount() {
       if (this.props.lastPunch.id || this.props.adminLastPunch[0].id) {
           this.setState({loadingPunches: true})
       }
    }

    render() {
        const { User, lastPunch, adminLastPunch } = this.props;
        const { loadingPunches } = this.state;

        if (loadingPunches){
            if (User.admin){
                return(
                    <AdminLastPunch PunchArray={adminLastPunch} />
                )
            } else {
                return (<SinglePunch Punch={lastPunch} />)
            }
        } else {
           return (
                <View style={styles.container}> 
                    <Text>Hello Welcome to my app</Text>
                </View>
            );
        }
    }
}
export default LastPunch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});