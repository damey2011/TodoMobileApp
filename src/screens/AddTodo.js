import React, { Component } from 'react';
import {Button, Container, Content, Input, Item, Text} from "native-base";
import {StyleSheet} from 'react-native'
import DatePicker from "react-native-datepicker";
import Todo from "../Models/Todo";
import store from '../store'
import {AddTodo, UpdateTodo} from "../store/actions/TodoActions";
import {ActionConst, Actions} from "react-native-router-flux";


class AddNewTodo extends Component {
    constructor (props){
        super()
        this.state = {
            todo: props.todo || new Todo()
        }
    }

    addTodo () {
        // If a props was sent in, update the todo, if not just add new one
        this.props.todo ? store.dispatch(UpdateTodo(this.state.todo)) : store.dispatch(AddTodo(this.state.todo))
        Actions.pop()
    }

    render() {
        return (
            <Container style={styles.bgWhite}>
                <Content style={styles.fullWidth}>
                    <Item>
                        <Input placeholder="Todo Title" style={[styles.fullWidth, styles.margin5]} value={this.state.todo.title} onChangeText={(text) => this.setState({todo: {...this.state.todo, title: text}})}/>
                    </Item>
                    <Item>
                        <Input placeholder="Todo Body" style={[styles.fullWidth, styles.margin5]} value={this.state.todo.body} onChangeText={(text) => this.setState({todo: {...this.state.todo, body: text}})}/>
                    </Item>
                    <Item>
                        <DatePicker
                            mode="datetime"
                            date={this.state.todo.dueDate}
                            confirmBtnText="Pick am"
                            cancelBtnText="Comot"
                            onDateChange={(date) => this.setState({todo: {...this.state.todo, dueDate: date}})}
                            style={[styles.fullWidth, styles.margin5]}
                            placeholder="Due Date/Time"
                        />
                    </Item>
                    <Button block style={[styles.fullWidth, styles.margin5]} onPress={() => this.addTodo()}>
                        <Text>{this.props.todo ? 'Update Todo' : 'Add New Todo'}</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    fullWidth: {
        flex: 1
    },
    bgWhite: {
        backgroundColor: 'white'
    },
    margin5: {
        margin: 5
    }
})

export default AddNewTodo;
