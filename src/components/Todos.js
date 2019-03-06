import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={()=>{ deleteTodo(todo.id) }}>
            <i title="Delete todo" className="material-icons cancel">cancel</i>
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