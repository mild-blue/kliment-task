import React from "react";
import { Link } from "react-router-dom";

import { PageContent } from "../components/design/PageContent";

export function NoMatch() {
  return (
    <>
      <h2>Tudy cesta nevede</h2>
      <PageContent>
        Vraťte se prosím na <Link to="/">hlavní stránku</Link>.
      </PageContent>
    </>
  );
}
