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

    // no boxes yet
    expect(container).toContainHTML("You have no todos.")

    addTodo(container);

    // expect to see a box
    const todo = container.querySelector(".TodoApp");
    expect(todo).toBeInTheDocument();
  });
})


// describe("editing todos", function () {
//   it("can edit a todo", function () {
//     const { container, debug } = render(<TodoApp />);
//     addTodo(container);
//     debug(container)
//     // editTodo(container);

//     // expect(container).toContainHTML("testTodoEdited")
//   });

  // it("matches snapshot after removing box", function () {
  //   const { container } = render(<BoxList />);
  //   addBox(container);
  //   fireEvent.click(container.querySelector(".Box-removeBtn"));
  //   expect(container).toMatchSnapshot();
  // })
// })
