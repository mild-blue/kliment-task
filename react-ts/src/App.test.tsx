import React from "react";
import { render } from "@testing-library/react";

import { AppState, OrderType } from "./state";
import { getHeading, WrappedApp } from "./testUtils";

test("visiting invalid path returns our 404 page", () => {
  render(<WrappedApp initialPath="/nono" />);

  expect(getHeading().textContent).toMatch("Tudy cesta nevede");
});

test("visiting the homepage redirects to the order type selector if no order type selected", () => {
  render(<WrappedApp initialPath="/" />);

  expect(getHeading().textContent).toMatch("Objednávkový systém");
});

test("visiting the homepage stays if order type selected", () => {
  const state: AppState = { orderType: OrderType.PRESCRIPTION };
  render(<WrappedApp initialPath="/" initialState={state} />);

  expect(getHeading().textContent).toMatch("už to sviští");
});
