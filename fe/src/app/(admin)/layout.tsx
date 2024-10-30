"use client";
import { instance } from "@/utils/axios/instance";
import ReactQueryProvider from "@/utils/react-query/Provider";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <>{children}</>
    </ReactQueryProvider>
  );
}
