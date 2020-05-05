import React from 'react'

const Todo = props => {

    return (
        <div onClick={() => {
            props.completedHandler(props.todoList.id)
        }} className={`todo completed-${props.todoList.completed}`}>
            <p>{props.todoList.todo}</p>
        </div>
    )
}

export default Todo