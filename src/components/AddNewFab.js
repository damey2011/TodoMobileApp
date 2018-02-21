import React, { Component } from 'react';
import {Button, Fab, Icon} from "native-base";

class AddNewFab extends Component {
    constructor () {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <Fab
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={this.props.openAddNew.bind(this)}>
                <Icon name="add" />
            </Fab>
        );
    }
}

export default AddNewFab;
