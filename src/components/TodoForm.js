import React from 'react'


const TodoForm = props => {

    return (
        <form onSubmit={props.submitHandler}>
            <input 
            onChange={props.inputHandler}
            type='text'
            name='task'
            value={props.formInput}
            >
            </input>

           <div className='btnContainer'>
                <button>Add</button>
                <button onClick={props.clearHandler}>Clear</button>
           </div>
        </form>
    )
}

export default TodoForm