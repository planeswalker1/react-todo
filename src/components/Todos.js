import React from 'react';

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>
            <i title="Delete this todo" className="material-icons cancel">cancel</i>
          </span>
           {todo.content}
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left, yay!</p>
  )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
};

export default Todos;