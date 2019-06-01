import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PunchCameraDisplay from '../Components/RecordPunchComponent/PunchCameraDisplay'
import PunchRecipt from '../Components/RecordPunchComponent/PunchRecipt';
export default class PunchOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
           route: 'scanning',
           punch: {},
           user: this.props.navigation.getParam('user', 'Not Signed in')
        }
    }

    onPunchRouteChange = (route, punchResponse) => {
        this.setState({route: route, punch: punchResponse})
    }

    render() {
        const { route, punch, user } = this.state;

        if (route === 'scanning') {
            alert(this.state.user.id)
            return ( <PunchCameraDisplay onPunchRouteChange={this.onPunchRouteChange} user={user.id} Inout={'IN'} />)
        }
        else if (punch.id && route ==='recipt') {
            return (
                <PunchRecipt Punch={punch} />
            )
        }

        return <View></View>
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  