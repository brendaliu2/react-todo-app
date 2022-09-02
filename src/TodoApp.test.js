import { render, fireEvent } from "@testing-library/react";
import TodoApp from './TodoApp';


/** Convenience method for adding a box in these tests. */
function addTodo(container,
  title = "testTodo",
  description = "descTodo",
  priority = 2) {
  const titleInput = container.querySelector("[name=title]");
  const descriptionInput = container.querySelector("[name=description]");
  const priorityInput = container.querySelector("[name=priority]");

  fireEvent.change(priorityInput, { target: { value: priority } });
  fireEvent.change(descriptionInput, { target: { value: description } });
  fireEvent.change(titleInput, { target: { value: title } });

  // better to test the button than submitting the form directly --- this way,
  // we are testing whether the button works as expected
  const button = container.querySelector(".NewTodoForm-addBtn");
  fireEvent.click(button);
}


function editTodo(container,
  title = "testTodoEdited",
  description = "descTodoEdited",
  priority = 3) {
  const titleInput = container.querySelector("[name=title]");
  const descriptionInput = container.querySelector("[name=description]");
  const priorityInput = container.querySelector("[name=priority]");

  fireEvent.change(priorityInput, { target: { value: priority } });
  fireEvent.change(descriptionInput, { target: { value: description } });
  fireEvent.change(titleInput, { target: { value: title } });

  // better to test the button than submitting the form directly --- this way,
  // we are testing whether the button works as expected
  const button = container.querySelector(".NewTodoForm-addBtn");
  fireEvent.click(button);
}

describe("adding todos", function() {
  it("can add a new todo", function () {
    const { container } = render(<TodoApp />);

    // no todos yet
    expect(container).toContainHTML("You have no todos.")

    addTodo(container);

    // expect to see a todo
    const todo = container.querySelector(".TodoApp");
    expect(todo).toBeInTheDocument();
  });
})


describe("editing todos", function () {
  it("can edit a todo", function () {
    const { container } = render(<TodoApp />);
    addTodo(container);

    editTodo(container);

    expect(container).toContainHTML("testTodoEdited")
  });
})

describe("removing todos", function () {
  it("can remove a todo", function () {
    const { container } = render(<TodoApp />);
    
    addTodo(container);
    
    const deletebutton = container.querySelector(".Delete");
    fireEvent.click(deletebutton);
    
    expect(container).toContainHTML("You have no todos.")
  });
})