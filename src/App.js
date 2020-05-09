import React from "react"
import "./App.css"
import TodoList from "./ToDo/TodoList"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [
        { id: 1, completed: false, title: "Learn JS" },
        { id: 2, completed: false, title: "Learn CSS" },
        { id: 3, completed: false, title: "Learn React" },
      ],
    }
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  toggleTodo(id) {
    this.setState({
      info: this.state.info.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }
  render() {
    return (
      <div className="App">
        <h1>ToDO list</h1>
        <TodoList todos={this.state.info} onToggle={this.toggleTodo}></TodoList>
      </div>
    )
  }
}
