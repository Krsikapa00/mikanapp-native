import React from 'react';
import { Container, Text, Button } from 'native-base'

export default class ButtonComp extends React.Component {
    render(){
        return(
            <Container>
                <Button
                onPress={this.props.onPress}
                >
                    <Text>{this.props.text}</Text>
                </Button>
            </Container>
        )
    }
}

