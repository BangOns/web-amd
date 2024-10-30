import { instance } from "@/utils/axios/instance";

export async function LoginFunc({ idUser, password }: ILogin) {
  try {
    const response = await instance.post("/login", { idUser, password });
    return response.data;
  } catch (error: any) {
    return { status: error.response.status, data: error.response.data };
  }
}
