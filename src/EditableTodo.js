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

  const [isEditing, setIsEditing] = useState(false);


  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(curr => !curr);

  }
  /** Call remove fn passed to this. */
  function handleDelete() {
    return remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {


    update({ id: todo.id, ...formData });
    setIsEditing(false);

  }

  return (
    <div className="EditableTodo">

      {isEditing ? <TodoForm
        handleSave={handleSave}
        initialFormData={{
          title: todo.title,
          description: todo.description,
          priority: todo.priority
        }} /> :
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm Edit"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger Delete"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority} />
        </div>}
    </div>
  );
}

export default EditableTodo;
