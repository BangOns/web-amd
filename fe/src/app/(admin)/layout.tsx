import ReactQueryProvider from "@/utils/react-query/Provider";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <>{children}</>
    </ReactQueryProvider>
  );
}
