import { NextResponse } from "next/server"; // Asynchronous (non-blocking) Edge Runtime 

export async function GET() {
  return NextResponse.json({ test: "Hello World!" });
}