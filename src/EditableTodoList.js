import React from "react";
import EditableTodo from "./EditableTodo";
import { v4 as uuid } from "uuid";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, update, remove}) {
  return (
      <div>
        {todos.map(todo => <EditableTodo update={update} remove={remove} todo = {todo} /> )}
      </div>
  );
}

export default EditableTodoList;
