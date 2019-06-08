import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';
import CreatePunch from './PunchSubmit';
import getUserValue from '../AsyncFunctions/GetUserData';



export default class PunchCameraDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            user: null
        }
    }

    async componentDidMount() {
        const user = await getUserValue()
        if (user.id){
            this.setState({user:user})
        }
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    render() {
        const { hasCameraPermission, scanned, user } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        }
        if (user === null) {
            return <Text>Could not get user information try loading again.</Text>;
        }
        return (
            <View
                style={{
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <Button
                        title={'Tap to Scan Again'}
                        onPress={() => this.setState({ scanned: false })}
                    />
                )}
            </View>
        )
    }

    handleBarCodeScanned = async({ type, data }) => {
        //type is the type of code scanned and data is value
        const { Inout } = this.props;
        const { user } = this.state;
        this.setState({scanned: true})
        
        punchResponse = await CreatePunch(data, user.id, Inout)
        
        if (punchResponse.id){
            alert(punchResponse.location)
            this.props.onPunchRouteChange('recipt', punchResponse)
        } else {
            alert(punchResponse)
        }

        
            // alert(punchResponse);
        
        // alert(data);
    };
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});