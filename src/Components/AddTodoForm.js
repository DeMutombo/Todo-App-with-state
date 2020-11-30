import React, {Component } from 'react';

class AddTodoForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            todoItem: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitTodo = this.submitTodo.bind(this)
    }

    handleChange(event){
        this.setState({todoItem: event.target.value})
    }
    submitTodo(event){
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({todoItem: ''})
    }
    render(){
        return(
            <form style={{marginBottom:'20px', display:'flex', justifyContent:'space-evenly'}} onSubmit={this.submitTodo}>
                <input style={{ border:'none', width:'340px', height: '30px', paddingLeft:'20px' }}type="text" value={this.state.todoItem} placeholder="Add a todo" onChange={this.handleChange}/>
                <button style={{border:'none', backgroundColor: 'salmon', color:'#fff' }}type="submit"> Add Todo </button>
            </form>
        )
    }
}

export default AddTodoForm;