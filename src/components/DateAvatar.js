import React from 'react'
import {View, Text} from "native-base";
import {StyleSheet} from 'react-native'

export default class DateAvatar extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View style={styles.textThumbnail}>
                <Text style={styles.thumbnailInner}>{this.props.day}</Text>
                <Text style={styles.thumbnailInnerTime}>{this.props.month}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textThumbnail: {
        width: 60,
        height: 60,
        borderWidth: 0.5,
        borderColor: 'rgba(51,51,51,0.11)',
        borderRadius: 30,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    thumbnailInner: {
        fontSize: 40,
        fontWeight: '800',
        zIndex: 2,
        color: 'gray'
    },
    thumbnailInnerTime: {
        fontSize: 15,
        fontWeight: '300',
        zIndex: 2,
        color: 'blue'
    }
})