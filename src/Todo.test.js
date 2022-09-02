import React from "react";
import { render } from "@testing-library/react";

import Todo from './Todo';


it("renders without crashing", function () {
  render(<Todo
    id={1}
    title='testTitle'
    description='testDesc'
    priority={1}
  />);
});

it('displays todo contents', function () {
  const { container } = render(<Todo
    id={1}
    title='testTitle'
    description='testDesc'
    priority={1}
  />);

  expect(container).toContainHTML('testTitle');
  expect(container).toContainHTML('testDesc');
  expect(container).toContainHTML('1');
});


// it("matches snapshot with default properties", function () {
//   const { container } = render(<Todo
//     id={1}
//     title='testTitle'
//     description='testDesc'
//     priority={1}
//   />);
//   expect(container).toMatchSnapshot();
// });
