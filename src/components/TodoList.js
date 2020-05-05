import React from 'react';
import Todo from '../components/Todo';

const TodoList = props => {

    return (
        <div className='todoListContainer'>
            {props.todoList.map( t => {
                return (
                    <Todo completedHandler={props.completedHandler} key={t.id} todoList={t}/>
                )
            })}
        </div>
    )
}

export default TodoList