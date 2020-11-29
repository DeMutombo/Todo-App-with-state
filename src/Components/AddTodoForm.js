import React, {Component } from 'react';

class AddTodoForm extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
        this.handleChange = this.handleChange.bind(this);
        this.submitTodo = this.submitTodo.bind(this)
    }

    handleChange(event){
        this.setState({todo: event.target.value})
    }
    submitTodo(event){
        event.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({todo: ''})
    }
    render(){
        return(
            <form onSubmit={this.submitTodo}>
                <input type="text" value={this.state.value} placeholder="Add a todo" onChange={this.handleChange}/>
                <button type="submit"> Add Todo </button>
            </form>
        )
    }
}

export default AddTodoForm;