import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { getHeading, WrappedApp } from "../testUtils";

test("clicking the CTA button redirects to the homepage", () => {
  render(<WrappedApp initialPath="/login" />);

  expect(getHeading().textContent).toMatch(/objednávkový systém/i);

  const submitButton = screen.getByRole<HTMLButtonElement>("button", { name: /K objednání/i });
  fireEvent.click(submitButton);

  expect(getHeading().textContent).toMatch("už to sviští");
});
