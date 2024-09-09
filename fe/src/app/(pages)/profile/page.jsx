import Header_Profile from "@/MyComponent/Profile/Header-Profile";
import Perintis_Profile from "@/MyComponent/Profile/Perintis-Profile";
import React from "react";

export default function Profile() {
  return (
    <article className="w-full container mx-auto px-4 lg:px-20  my-9 md:mt-12 lg:mt-[60px]">
      <Header_Profile />
      <Perintis_Profile />
    </article>
  );
}
