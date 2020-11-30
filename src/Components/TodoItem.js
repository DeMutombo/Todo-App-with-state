import React, { Component } from 'react';
import '../Styles/TodoItem.css'

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
    isCompleted = ()=>{
         this.props.handleComplete()
    }
    render() {
        const space = {marginLeft: '15px'}
        let result;
        if(this.state.edit) {
            result = (
                <div className="TododItem-single">
                    <form onSubmit={this.updateTodo}>
                        <input className="TododItem-single-input" type="text" value={this.state.task}  onChange={this.handleChange}/>
                        <button type="submit"> Update </button>
                    </form>
                </div>
            )
        } else{
           result = (
               <div className="TododItem">
                   <div className="TododItem-single">
                       <div className={this.props.complete ? 'completed' : ''}>
                       {this.props.todo} 
                       </div>
                       <div >
                        <button  onClick={this.isCompleted}>check</button>
                        <button onClick={this.isEditing}>edit</button>
                        <button onClick={this.props.deleItem}>delete</button>
                       </div> 
                    </div>
               </div>
           )
        }
       return result;
    }
}

export default TodoItem;
