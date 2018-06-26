import * as React from "react";
import App from "./App";

import * as renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<App a="123" />).toJSON();
  expect(rendered).toBeTruthy();
});
