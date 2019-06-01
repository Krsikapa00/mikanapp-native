import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LastPunch from '../Components/LastPunch/LastPunchComp';
import { withNavigationFocus } from 'react-navigation';
import GetLastPunch from "../Components/LastPunch/GetLastPunch";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: this.props.navigation.getParam('user', 'Not Signed in'),
           loadedpunches: false,
           lastPunch: {},
           adminLastPunch: [],
        }
    }
    async onRefresh() {
        const lastPunch = await GetLastPunch(this.state.user);
        if (this.state.user.admin) {
            this.setState({adminLastPunch:lastPunch})
            // alert('Hello')
        } else{
            this.setState({lastPunch:lastPunch})
        }
        this.setState({loadedpunches: true})
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.isFocused && this.props.isFocused) {
            this.onRefresh()
        }
    }
    componentDidMount(){
        this.onRefresh();
    }
    render() {
        const { user, loadedpunches, adminLastPunch, lastPunch } = this.state
        if (loadedpunches){
        return (
            <View style={styles.container} >
                <Text>{`Welcome ${user.name}`}</Text>

                <LastPunch User={user} lastPunch={lastPunch} adminLastPunch={adminLastPunch}  />
            </View>
        )
        } else {
            return( <View />)
        }
    }
}
export default withNavigationFocus(HomeScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  