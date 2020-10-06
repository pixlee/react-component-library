// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TableComponent from "./TableComponent";
import { TableComponentProps } from "./TableComponent.types";

describe("Test Component", () => {
  let props: TableComponentProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TableComponent {...props} />);

  it.skip("should render foo text correctly", () => {
  });
});
