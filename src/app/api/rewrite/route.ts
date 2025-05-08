import { NextRequest, NextResponse } from "next/server";
import { rewriteText } from "@/lib/openai"; // <-- import the helper

export async function POST(req: NextRequest) {
  const { text, action } = await req.json();

  if (!text || !action) {
    return NextResponse.json({ error: "Missing text or action" }, { status: 400 });
  }

  try {
    const result = await rewriteText(text, action);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Rewrite API error:", error);
    return NextResponse.json({ error: "Failed to process text" }, { status: 500 });
  }
}
