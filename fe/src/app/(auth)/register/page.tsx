import Container_Auth from "@/MyComponent/Components-All/Auth/Container-Auth";
import Header_Bg_Auth from "@/MyComponent/Components-All/Auth/Header-Bg-Auth";
import Header_Text_Auth from "@/MyComponent/Components-All/Auth/Header-Text";
import Form_Register from "@/MyComponent/Register/Form-Register";

import React from "react";

export default function page() {
  return (
    <Container_Auth>
      <Header_Bg_Auth />
      <section className="w-full p-4 sm:p-6 lg:px-20 flex flex-col justify-center gap-3">
        <Header_Text_Auth
          textHeader="Selamat Datang :)"
          description="Buat akunmu sesuai dengan aturan"
        />
        <Form_Register />
      </section>
    </Container_Auth>
  );
}
