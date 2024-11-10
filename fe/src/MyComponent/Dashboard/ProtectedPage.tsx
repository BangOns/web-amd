import React from "react";

export default async function ProtectedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
