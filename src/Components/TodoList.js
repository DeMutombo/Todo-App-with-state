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
        this.haneleDelete = this.haneleDelete.bind(this);
        this.update = this.update.bind(this)
    
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

    handleEditing(){
        this.setState({isEditing: true})
    }
    update(id, updatedTask){
            let updatedTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, todoItem: updatedTask}
            }
            return todo;
        });
        this.setState({todos:updatedTodo});
    }
    render(){
        const todo = this.state.todos.map(todo => (<TodoItem key={todo.id} id={todo.id} todo={todo.todoItem} deleItem={()=>this.haneleDelete(todo.id)} Editing={()=> this.handleEditing(todo.id)} update={this.update}/>))
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