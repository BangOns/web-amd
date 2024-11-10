import { instance } from "@/utils/axios/instance";

export async function LoginFunc({ idUser, password }: ILogin) {
  try {
    const response = await instance.post("/login", { idUser, password });
    return response.data;
  } catch (error: any) {
    return { status: error.response.status, data: error.response.data };
  }
}
export async function RegisterFunc({ idUser, name, password }: IRegister) {
  try {
    const response = await instance.post("/register", {
      idUser,
      password,
      name,
    });
    return response.data;
  } catch (error: any) {
    return { status: error.response.status, data: error.response.data };
  }
}
