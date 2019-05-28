import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';
import CreatePunch from './PunchSubmit'

export default class PunchCameraDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            userID: 1,
        }
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
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
        const { userID } = this.state;
        const { Inout } = this.props;
        this.setState({scanned: true})
        punchResponse = await CreatePunch(data, userID, Inout)
        
        if (punchResponse.id){
            alert(punchResponse.location)
            this.props.onPunchRouteChange('recipt', punchResponse)
        } else {
            alert(punchResponse)
        }

        
            // alert(punchResponse);
        
        // alert(data);
    };

    LocationCheck = async (data) => {
        const { user, locationcode, locationname, inout } = this.state;

            const response = await fetch('https://mikan-app-api.herokuapp.com/locationscheck', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        location: data
                    })
            })
            .then(response => response.json())
            .catch(err => {
                alert("3")
                return null  
            });

            if (!response.id) {
                alert(resp)
            } else {
                alert("yes")
                
                this.setState({locationcode: resp.code, locationname: resp.name, scanned: true})
                // this.props.onRouteChange('recipt')
            }
    }
    
    

}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});