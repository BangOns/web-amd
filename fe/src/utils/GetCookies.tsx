"use server";

import { cookies } from "next/headers";
type ItokenAccess = {
  name: string;
  path?: string;
  value: string;
};
export async function getCookies() {
  const cookiesStorage = await cookies();
  const token: ItokenAccess | undefined = cookiesStorage.get("refreshtoken");
  return { accessToken: token };
}
