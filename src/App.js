import React, {Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Play some video games.' },
      { id: 2, content: 'Learn the basics of React by the end of the month.' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = String(Math.random()).substring(2);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos:</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
