import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from './TodoForm';
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {

  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {

    setTodos(todos => [...todos, { id: uuid(), ...newTodo }]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => todos.map(({ id, title, description, priority }) => {
      if (updatedTodo.id === id) {
        title = updatedTodo.title;
        description = updatedTodo.description;
        priority = updatedTodo.priority;
      }
      return { id, title, description, priority };
    }));

  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0 ? <EditableTodoList
            create={create}
            remove={remove}
            todos={todos}
            update={update}
          /> :
            <span className="text-muted">You have no todos.</span>

          }
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            {todos.length > 0 ?
              <div>
                <h3>Top Todo</h3>
                <TopTodo todos={todos} />
              </div> :
              ""}

          </section>

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;