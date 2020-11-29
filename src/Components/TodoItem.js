import React from 'react'

 function TodoItem(props) {
    return (
        <div className="TododItem">
            <div className="TododItem-single">{props.todo} <button>edit</button><button onClick={props.deleItem}>delete</button></div>
        </div>
    )
}


export default TodoItem;