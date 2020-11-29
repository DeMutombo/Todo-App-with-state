import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.haneleDelete = this.haneleDelete.bind(this)
    
    }

    handleSubmit(todo){
        let newTodo ={...todo, id:uuidv4(), complete: false }
        this.setState(st=>({
            todos: [...st.todos, newTodo]
        }))
    }

    haneleDelete(id){
        let newTodos = this.state.todos.filter((todo) => todo.id !== id )
        this.setState({todos: newTodos});
    }

    render(){
        const todo = this.state.todos.map(todo => (<TodoItem key={todo.id} todo={todo.todoItem} deleItem={()=>this.haneleDelete(todo.id)}/>))
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