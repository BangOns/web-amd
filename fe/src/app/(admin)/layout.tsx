import ReactQueryProvider from "@/utils/react-query/Provider";
import React from "react";

export default function layout() {
  return (
    <ReactQueryProvider>
      <div>layout</div>
    </ReactQueryProvider>
  );
}
