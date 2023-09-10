import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  return new Response(
    JSON.stringify({
      message: "Hello World",
    }),
    { status: 200 }
  );
}

export async function POST(req) {
  const { id, title, description } = await req.json();

  return NextResponse.json({ id, title, description }, { status: 201 });
}
