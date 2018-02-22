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
                <Text style={styles.thumbnailInner}>{this.props.index}</Text>
                {/*<Text style={styles.thumbnailInnerTime}>{this.props.month}</Text>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textThumbnail: {
        width: 30,
        height: 30,
        borderWidth: 0.8,
        borderColor: 'rgba(51,51,51,0.21)',
        borderRadius: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    thumbnailInner: {
        fontSize: 20,
        fontWeight: '800',
        zIndex: 2,
        color: 'gray'
    },
    thumbnailInnerTime: {
        fontSize: 8,
        fontWeight: '300',
        zIndex: 2,
        color: 'blue'
    }
})