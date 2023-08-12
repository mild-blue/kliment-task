import React, { Dispatch, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AppState, initialAppState, StateContext } from "./state";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WithState>
        <App />
      </WithState>
    </BrowserRouter>
  </React.StrictMode>
);

function WithState({ children }: { children: React.ReactNode }) {
  const [appState, setAppState] = useState<AppState>(initialAppState);
  const stateContextValue = useMemo<[AppState, Dispatch<AppState>]>(
    () => [appState, setAppState],
    [appState, setAppState]
  );

  return <StateContext.Provider value={stateContextValue}>{children}</StateContext.Provider>;
}
