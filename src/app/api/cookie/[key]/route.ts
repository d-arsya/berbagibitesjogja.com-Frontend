import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  const key = context.params.key;
  const cookieValue = request.cookies.get(key)?.value;

  if (!cookieValue) {
    return NextResponse.json({ error: "Cookie not found" }, { status: 404 });
  }

  return NextResponse.json({ key, value: cookieValue });
}
