import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import Home from '../screens/Home'
import AddTodo from "../screens/AddTodo";

export default class Routes extends React.Component {
    render () {
        return (
                <Router>
                    <Stack key="root" hideNavBar={false}>
                        <Scene key="home" component={Home} initial={true} title="ToDo Home"/>
                        <Scene key="addTodo" component={AddTodo} direction="vertical" title="Add New Todo"/>
                    </Stack>
                </Router>
        )
    }
}