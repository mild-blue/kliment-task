import React, { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

import { AppState, initialAppState, StateContext } from "./state";
import App from "./App";

export const getHeading = () => screen.getByRole<HTMLHeadingElement>("heading");

export function WrappedApp({ initialState, initialPath }: { initialState?: AppState; initialPath: string }) {
  const [state, setState] = useState<AppState>(initialState || initialAppState);

  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <StateContext.Provider value={[state, setState]}>
        <App />
      </StateContext.Provider>
    </MemoryRouter>
  );
}
