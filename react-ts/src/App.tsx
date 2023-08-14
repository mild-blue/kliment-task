import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { Homepage } from "./routes/Homepage";
import { Login } from "./routes/Login";
import { NoMatch } from "./routes/NoMatch";

import "./styles/variables.css";
import "./styles/main.css";
import "./styles/components/design/PageContent.css";
import "./styles/components/design/FancyRadio.css";
import "./styles/components/OrderTypeForm.css";
import "./styles/components/CatEmoji.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return <Outlet />;
}

export default App;
