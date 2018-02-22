import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./src/routes/index";
import store from './src/store'
import {Provider} from "react-redux";
import {Root} from "native-base";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Root>
                <Routes/>
              </Root>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
