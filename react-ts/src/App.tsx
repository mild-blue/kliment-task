import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/variables.css";
import "./styles/main.css";
import "./styles/components/design/PageContent.css";
import "./styles/components/design/FancyRadio.css";
import "./styles/components/OrderTypeForm.css";
import "./styles/components/CatEmoji.css";

import { routes } from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
