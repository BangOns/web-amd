import { RegisterFunc } from "@/helper/FuncAuth";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
  const { idUser, name, password, rePassword }: IRegister = await req.json();

  if (password === rePassword) {
    try {
      const response = await RegisterFunc({ idUser, name, password });

      if (response.status !== 200) {
        throw new Error(`${response.data.message}`);
      }
      return NextResponse.json(
        {
          status: response.status,
          message: response.message,
        },
        {
          status: response.status,
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          status: 404,
          data: {},
          message: (error as Error).message || "Gagal Membuat Akun :(",
        },
        {
          status: 404,
        }
      );
    }
  }
  return NextResponse.json(
    {
      status: 400,
      data: {},
      message: "Password and rePassword not Match",
    },
    {
      status: 400,
    }
  );
}
