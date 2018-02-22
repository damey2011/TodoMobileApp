import React from 'react'
import {Body, Grid, Col, Button, Content, Icon, Left, ListItem, Right, SwipeRow, Switch, Text, View, Toast} from "native-base";
import {StyleSheet} from 'react-native'
import DateAvatar from "./DateAvatar";

export default class ToDoItem extends React.Component {
    render () {
        return (
            <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                body={
                    <Grid>
                        <Col>
                            <Text style={{textAlign:'left'}}>{this.props.item.title}</Text>
                        </Col>
                        <Col>
                            <Switch value={this.props.item.isDone} onChange={this.props.toggleDone.bind(this, this.props.item)} style={{alignSelf: 'flex-end'}}/>
                        </Col>
                    </Grid>
                }
                left={
                    <Button light onPress={this.props.openEdit.bind(this, this.props.item)}>
                        <Icon active ios="ios-edit"/>
                    </Button>
                }
                right={
                    <Button danger onPress={this.props.deleteTodo.bind(this, this.props.item)}>
                        <Icon active name="trash"/>
                    </Button>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    fullWidth: {
        flex: 1
    },
    padding8: {
        padding: 8
    }
})