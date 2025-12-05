import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "name",
    value: "lee",
    httpOnly: true,
    secure: true,
    sameSite: "none",
    partitioned: true,
    path: "/",
  });

  return Response.json({ message: "Hello World" });
}
