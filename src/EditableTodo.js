import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  let isEditing = false;
  /** Toggle if this is being edited */
  function toggleEdit() {
    isEditing = !isEditing;
  }
  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    isEditing = false;
  }

  return (
    <div className="EditableTodo">


      {isEditing &&
        <TodoForm handleSave={handleSave} initialFormData={todo} />
      }

      {!isEditing &&
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo
            title={todo.title}
            description={todo.description}
            priority={todo.priority} />
        </div>
      }

    </div>
  );
}

export default EditableTodo;
