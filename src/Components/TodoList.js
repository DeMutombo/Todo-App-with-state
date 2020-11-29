import React, {Component} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(todo){
        let newTodo ={...todo, id:1, complete: false }
        this.setState(st=>({
            todos: [...st.todos, newTodo]
        }))
    }
    render(){
        const todo = this.state.todos.map(todo => (<TodoItem todo={todo.todoItem} id={todo.id}/>))
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