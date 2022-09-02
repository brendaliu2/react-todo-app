import { render } from "@testing-library/react";
import EditableTodoList from './EditableTodoList';


const createMock = jest.fn();
const removeMock = jest.fn();
const updateMock = jest.fn();

it("renders without crashing", function () {
  render(<EditableTodoList
    create={createMock}
    remove={removeMock}
    todos={[
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
      },
      {
        id: 2,
        title: "Make dinner",
        description: "Cook something healthy",
        priority: 1,
      },
      {
        id: 3,
        title: "Go to bed",
        description: "In bed by 11:15",
        priority: 3,
      },
    ]}
    update={updateMock} />);
});

it('displays list of editable todos', function () {
  const { container } = render(<EditableTodoList
    create={createMock}
    remove={removeMock}
    todos={[
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
      },
      {
        id: 2,
        title: "Make dinner",
        description: "Cook something healthy",
        priority: 1,
      },
      {
        id: 3,
        title: "Go to bed",
        description: "In bed by 11:15",
        priority: 3,
      },
    ]}
    update={updateMock} />);
  expect(container).toContainHTML("Code!");
  expect(container).toContainHTML("Cook something healthy");
  expect(container).toContainHTML("(priority:3)");

});