import React from 'react';
import './components/Todo.css'
import TodoForm from './components/TodoForm';
import TodoList from '../src/components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
        formInput: '',
        todoList: []
    }
  }
  
  addTodo = toDo => {
    const newTodo = {
      todo: toDo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
  inputHandler = e => {
        this.setState(
            {
                formInput: e.target.value
            }
        )
    }
  submitHandler = e => {
      e.preventDefault()
      this.addTodo(this.state.formInput)
      this.setState(
          {
              formInput: ''
          }
      )
  }
  clearHandler = e => {
    e.preventDefault()

    this.setState({
      todoList: this.state.todoList.filter( i => {
        return i.completed === false
      })
    })
  }

  completedHandler = id => {
    this.state.todoList.map( item => {
      if (item.id === id){
        item.completed = !item.completed
        this.setState(item)
        return item
      } 
      return item
    })
  }

  render() {
    return (
      <div>
        <h2>tudu</h2>
        <TodoForm inputHandler={this.inputHandler} submitHandler={this.submitHandler} formInput={this.state.formInput} clearHandler={this.clearHandler}/>
        <TodoList todoList={this.state.todoList} completedHandler={this.completedHandler}/>
      </div>
    );
  }
}

export default App;
