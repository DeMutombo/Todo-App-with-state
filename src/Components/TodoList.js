import React, {Component} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[ {todo:"Go running", id:1}]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(todo){
        this.setState(st=>({
            todos: [...st.todos, todo]
        }))
    }
    render(){
        const todo = this.state.todos.map(todo => (<TodoItem todo={todo.todo} id={todo.id}/>))
        return(
            <div>
                <h2>Out Todo List</h2>
                <AddTodoForm addTodo={this.handleSubmit}/>
                {todo}
            </div>
            
        )
    }
}

export default TodoList;