import { LoginFunc } from "@/helper/FuncAuth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
  const { idUser, password }: ILogin = await req.json();
  const cookiesStore = await cookies();
  try {
    const responseLogin = await LoginFunc({ idUser, password });
    if (responseLogin.status !== 200) {
      throw new Error();
    } else {
      cookiesStore.set("refreshtoken", responseLogin.data.refreshToken, {
        httpOnly: true,
        secure: true,
      });
      cookiesStore.set("accesstoken", responseLogin.data.token);
      return NextResponse.json(
        {
          status: responseLogin.status,
          data: responseLogin.data,
          message: responseLogin.message,
        },
        {
          status: responseLogin.status,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: 400,
        data: {},
        message: "Failed to Login",
      },
      {
        status: 400,
      }
    );
  }
}
