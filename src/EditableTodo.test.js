import React from "react";
import { render, fireEvent } from "@testing-library/react";

import EditableTodo from './EditableTodo';

const updateMock = jest.fn()
const deleteMock = jest.fn()


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
    remove={deleteMock()} />)
    
});
// it('edit button has listener');
// it('delete button has listener');