import React, {Component} from 'react'
import {
    View, Text, Icon, Container, Header, Grid, Col, Segment, Button, List
} from 'native-base';
import {StyleSheet} from 'react-native'
import {connect} from "react-redux";
import Todo from "../Models/Todo";
import ToDoItem from "../components/ToDoItem";
import AddNewFab from "../components/AddNewFab";

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            todos: this.props.todos,
            todo: new Todo(),
            current: 1
        }
    }

    componentWillMount () {
        
    }

    getTodos (filter=1) {
        switch (filter) {
            case 1:
                this.setState({current: filter, todos: this.props.todos})
                break
            case 2:
                this.setState({current: filter, todos: this.props.todos.filter(todo => todo.done)})
                break
            case 3:
                this.setState({current: filter, todos: this.props.todos.filter(todo => !todo.done)})
                break
            default:
                break
        }
    }

    openAddNew () {
        alert('Add New Todo')
    }

    render () {
        const itemList = this.state.todos.map((todo, index) => (
            <ToDoItem item={todo} key={index}/>
        ))

        return (
            <Container style={styles.container}>
                <Segment>
                    <Button active={this.state.current === 1} first onPress={this.getTodos.bind(this, 1)}>
                        <Text>All</Text>
                    </Button>
                    <Button active={this.state.current === 2} onPress={this.getTodos.bind(this, 2)}>
                        <Text>Done</Text>
                    </Button>
                    <Button last active={this.state.current === 3} onPress={this.getTodos.bind(this, 3)}>
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
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const mapStateToProps = (state) => {
    return {todos: state.todoReducer}
}

export default connect(mapStateToProps)(Home)