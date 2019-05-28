import React from 'react';
import { Alert } from 'react-native';
import { Container } from 'native-base';
import ButtonComp from '../ButtonComp.js';

export default class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            latestpunch: [],
            adminlist: [],
        }
    }

    getUserList(adminuser){
        return fetch(`https://mikan-app-api.herokuapp.com/loadusers`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: adminuser.id,
                admin: adminuser.admin
            })
        })
        .then(response => response.json())
        .then(usersarray =>{
            // console.log(usersarray);
            this.setState({adminlist: usersarray}) 
            return usersarray;
        })
        .catch(err => console.log(err));
    }

    getLastPunch = (user) => {
        fetch(`https://mikan-app-api.herokuapp.com/latestpunch`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: user.id,
            })
        })
        .then(response => response.json())
        .then(resp =>{
            if (resp.id) {
                this.setState({latestpunch:resp})
                // console.log(resp);
            } else {
                console.log(resp);
            }
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        // if (this.props.user.admin) {
        //     this.getUserList(this.props.user)
        //     .then(resp => {
        //         this.setState({adminlist:resp})
        //     })
        // } else {
        //     this.getLastPunch(this.props.user)
        // }
    }

    ButtonAlertMessage(message) {
        Alert.alert(message);
    }

    render() {
        let admin;
        const { user, onRouteChange } = this.props;
       

        if (user.admin) {
            admin = (
                <Container>
                <ButtonComp
                    onPress={onRouteChange.bind(this,"Manual Punch")}
                    text="Manual Punch"
                />
                <ButtonComp
                    onPress={onRouteChange.bind(this,"Edit Users")}
                    text="Edit Users"
                />
                <ButtonComp
                    onPress={onRouteChange.bind(this,"Edit Locations")}
                    text="Edit Locations"
                />
            </Container>
            )

            
        }

        return(
            <Container>
                <Container>
                    <ButtonComp
                        onPress={onRouteChange.bind(this,"Punch In")}
                        text="Punch In"
                    />
                    <ButtonComp
                        onPress={onRouteChange.bind(this,"Punch Out")}
                        text="Punch Out"
                    />
                    <ButtonComp
                        onPress={onRouteChange.bind(this,"History")}
                        text="History"
                    />

                    {admin}
                </Container>
                {/* { user.admin == true
                ? adminready
                :   <Lastpunch punch={latestpunch} />
                } */}

            </Container>
        )
    }


}



