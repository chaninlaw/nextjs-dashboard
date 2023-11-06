import { NextRequest, NextResponse } from "next/server"

export const GET = (req: NextRequest) => {
  return Response.json({ message: "Hi" }, { status: 500 })
}
