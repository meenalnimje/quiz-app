import { NextResponse } from "next/server";
import { quizDetails } from "@/lib/data";

export async function GET(request, { params }) {
  const { id } = params;
  return NextResponse.json(quizDetails[id] || null);
}
