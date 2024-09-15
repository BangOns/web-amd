import Form_Login from "@/MyComponent/Login/Form-Login";
import Header_Text_Login from "@/MyComponent/Login/Header-Text";

import React from "react";

export default function page() {
  return (
    <article className="w-full grid grid-cols-1 md:grid-cols-2 place-content-stretch ">
      <section className="w-full p-4 sm:p-6 lg:px-20 flex flex-col justify-center gap-3">
        <Header_Text_Login />
        <Form_Login />
      </section>
      <figure className="md:grid hidden bg-image-login bg-no-repeat bg-center bg-cover blur-[2px] overflow-hidden w-full  place-items-center "></figure>
    </article>
  );
}
