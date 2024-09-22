import { z } from "zod";

export const formSchemaLogin = z.object({
  idUser: z
    .string()
    .min(6, {
      message: "Username must be at least 6 characters.",
    })
    .regex(/^(?=.*[A-Za-z]{3})(?=.*\d{3})[A-Za-z\d]{6}$/, {
      message: "ID harus mengandung tepat 3 huruf dan 3 angka",
    }),
  password: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});

export const formSchemaRegister = z.object({
  idUser: z
    .string()
    .min(6, {
      message: "Username must be at least 6 characters.",
    })
    .regex(/^(?=(.*[A-Za-z]){3})(?=(.*[0-9]){3})[A-Za-z0-9]{6}$/, {
      message: "ID harus mengandung tepat 3 huruf dan 3 angka",
    }),
  password: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  rePassword: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
});
