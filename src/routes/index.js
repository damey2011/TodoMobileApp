import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import Home from '../screens/Home'

export default class Routes extends React.Component {
    render () {
        return (
                <Router>
                    <Stack key="root" hideNavBar={false}>
                        <Scene key="home" component={Home} initial={true} title="ToDo Home"/>
                    </Stack>
                </Router>
        )
    }
}