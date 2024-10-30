import { LoginFunc } from "@/helper/FuncAuth";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
  const { idUser, password }: ILogin = await req.json();
  try {
    const responseLogin = await LoginFunc({ idUser, password });
    if (responseLogin.status !== 200) {
      throw new Error();
    } else {
      return NextResponse.json({
        status: responseLogin.status,
        data: responseLogin.data,
        message: responseLogin.message,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 400,
      data: {},
      message: "Failed to Login",
    });
  }
}
