import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";

import EditableTodo from './EditableTodo';

const updateMock = jest.fn();
const deleteMock = jest.fn();


it("renders without crashing", function () {
  render(<EditableTodo
    todo={{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }}
    update={updateMock()}
    remove={deleteMock()} />);
});

it('displays buttons', function () {
  const { container } = render(<EditableTodo
    todo={{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }}
    update={updateMock()}
    remove={deleteMock()} />);
  expect(container.querySelector(".Edit")).toBeInTheDocument();
  expect(container.querySelector(".Delete")).toBeInTheDocument();

});

it('edit button has listener', function () {
  const { container } = render(<EditableTodo
    todo={{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }}
    update={updateMock}
    remove={deleteMock} />);
  const editButton = container.querySelector(".Edit");
  fireEvent.click(editButton);

  expect(container).toContainHTML('form')
});


it('delete button has listener', function () {
  const { container} = render(<EditableTodo
    todo={{
      id: 1,
      title: "testTitle",
      description: "testDesc",
      priority: 1
    }}
    update={updateMock}
    remove={deleteMock} />);
    const deleteButton = container.querySelector(".Delete");

  fireEvent.click(deleteButton);
  expect(deleteMock).toHaveBeenCalled();

});