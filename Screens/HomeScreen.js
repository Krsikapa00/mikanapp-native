import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import LastPunch from '../Components/LastPunch/LastPunchComp';
import { withNavigationFocus } from 'react-navigation';
import GetLastPunch from "../Components/LastPunch/GetLastPunch";
import getUserValue from '../Components/AsyncFunctions/GetUserData';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: {},
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

    async componentDidMount(){
        const user = await getUserValue()
        if (user.id){
            this.setState({user:user})
        }
        // alert(this.state.user.name)
        await this.onRefresh();
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
  