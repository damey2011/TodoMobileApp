import React, {Component} from 'react'
import {
    View, Text, Icon, Container, Header, Grid, Col, Segment, Button, List
} from 'native-base';
import {StyleSheet} from 'react-native'
import {connect} from "react-redux";
import Todo from "../Models/Todo";
import ToDoItem from "../components/ToDoItem";
import AddNewFab from "../components/AddNewFab";
import {Actions} from 'react-native-router-flux'
import {DeleteTodo, UpdateTodo} from "../store/actions/TodoActions";
import store from '../store'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            todo: new Todo(),
            current: 1,
            general: ''
        }
    }

    componentWillMount () {

    }

    filteredTodos (filter=1) {
        switch (filter) {
            case 1:
                return this.props.todos
            case 2:
                return this.props.todos.filter(todo => todo.isDone)
            case 3:
                return this.props.todos.filter(todo => !todo.isDone)
            default:
                return this.props.todos
        }
    }

    openAddNew () {
        Actions.addTodo()
    }

    toggleDone (todo) {
        store.dispatch(UpdateTodo({...todo, isDone: !todo.isDone}))
    }

    deleteTodo (todo) {
        store.dispatch(DeleteTodo(todo))
    }

    openEdit (todo) {
        Actions.addTodo({todo, title: 'Update Todo'})
    }

    render () {
        const items = this.filteredTodos(this.state.current)
        const itemList = items.length > 0
            ?
            items.map((todo, index) => (
                <ToDoItem
                    item={todo}
                    key={index}
                    index={index}
                    toggleDone={this.toggleDone}
                    deleteTodo={this.deleteTodo}
                    openEdit={this.openEdit}
                />
            ))
            :
            (
                <Text style={{textAlign: 'center'}}>
                    You have no todo Item, press <Icon name="add"/> to add new Items
                </Text>
            )

        return (
            <Container style={styles.container}>
                <Segment>
                    <Button active={this.state.current === 1} first onPress={() => this.setState({current: 1})}>
                        <Text>All</Text>
                    </Button>
                    <Button active={this.state.current === 2} onPress={() => this.setState({current: 2})}>
                        <Text>Done</Text>
                    </Button>
                    <Button last active={this.state.current === 3} onPress={() => this.setState({current: 3})}>
                        <Text>Pending</Text>
                    </Button>
                </Segment>
                <Grid>
                    <Col>
                        <List>
                            {itemList}
                        </List>
                    </Col>
                </Grid>

                <AddNewFab openAddNew={this.openAddNew}/>

                <Text onPress={() => console.log(store.getState())}>Check State</Text>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})

const mapStateToProps = (state, ownProps) => {
    return {todos: state.todos}
}

export default connect(mapStateToProps)(Home)