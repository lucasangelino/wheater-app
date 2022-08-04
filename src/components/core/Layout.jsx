import React from "react";

export default function Layout({ children }) {
  return <div className="h-100 w-100 m-2">{children}</div>;
}

Layout.displayName = "Layout";
