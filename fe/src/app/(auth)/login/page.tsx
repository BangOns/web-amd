import Container_Auth from "@/MyComponent/Components-All/Auth/Container-Auth";
import Header_Bg_Auth from "@/MyComponent/Components-All/Auth/Header-Bg-Auth";
import Form_Login from "@/MyComponent/Login/Form-Login";

import React from "react";
import Header_Text_Auth from "@/MyComponent/Components-All/Auth/Header-Text";

export default function page() {
  return (
    <Container_Auth>
      <section className="w-full p-4 sm:p-6 lg:px-20 flex flex-col justify-center gap-3">
        <Header_Text_Auth />
        <Form_Login />
      </section>
      <Header_Bg_Auth />
    </Container_Auth>
  );
}
