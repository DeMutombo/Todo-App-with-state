import React, { Component } from 'react'

class TodoItem extends Component {
    state = {
        task: this.props.todo,
        edit:false
    }

    isEditing = ()=>{
        this.setState({
            edit:!this.state.edit
        })
    }
    handleChange = (event) =>{
        this.setState({task: event.target.value})
    }
    updateTodo =(e) => {
        e.preventDefault();
        let {id } = this.props
        let {task} = this.state;
        this.props.update(id,task)
        this.setState({
            edit:!this.state.edit
        })
    }
    render() {
        let result;
        if(this.state.edit) {
            result = (
                <div>
                    <form onSubmit={this.updateTodo}>
                        <input type="text" value={this.state.task}  onChange={this.handleChange}/>
                        <button type="submit"> Update </button>
                    </form>
                </div>
            )
        } else{
           result = (
               <div className="TododItem">
                   <div className="TododItem-single">{this.props.todo} <button onClick={this.isEditing}>edit</button><button onClick={this.props.deleItem}>delete</button></div>
               </div>
           )
        }
       return result;
    }
}

export default TodoItem;
