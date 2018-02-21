import React from 'react'
import {Body, Left, ListItem, Right, Text} from "native-base";
import DateAvatar from "./DateAvatar";

export default class ToDoItem extends React.Component {
    render () {
        return (
            <ListItem avatar>
                <Left>
                    <DateAvatar day={this.props.item.dateCreated.getDate()} month={this.props.item.dateCreated.getMonth()}/>
                </Left>
                <Body>
                <Text>{this.props.item.title}</Text>
                <Text note>{this.props.item.body}</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
            </ListItem>
        )
    }
}