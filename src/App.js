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
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos:</h1>
        <Todos todos={this.state.todos} />
        <AddTodo />
      </div>
    );
  }
}

export default App;
