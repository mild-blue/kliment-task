import React from "react";

export function PageContent({ children }: { children: React.ReactNode }) {
  return <main className="PageContent">{children}</main>;
}
